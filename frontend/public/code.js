var socket = io();



var body = {
  controller: function() {
    var messages = []

    socket.on('disconnect', function(msg) {
      console.log("lost connection to the server")
    })

    socket.on('reconnect', function(msg) {
      console.log("reconnected to the server")
    })

    socket.on('chat message', function(msg) {
      console.log("message recieved from the server:" + msg)
      messages.push(msg)
      console.log(messages)
      m.redraw();
    });

    return {
      value: m.prop(""),
      messages:messages
    }
  },
  view: function(ctrl) {
    return m(".app", [
        //list the messages recieved
        m("ul",{
          class:"messages"
        },[
          ctrl.messages.map(function(msg){
            return  m("li",m("h2",msg))
          })
        ]),
        //form to enter the data
        m("form", {
          onsubmit: function() {
            socket.emit("chat message", ctrl.value(),function(res){
                console.log(res)
                console.log("message sent: ", ctrl.value())
                ctrl.value(" ")
            });
            return false;
          }
        }, [
          m("input", {
            id: "m",
            autocomplete: false,
            value: ctrl.value(),
            onchange: m.withAttr("value", ctrl.value)
          }),
          m("button", "send")
        ])
      
    ])
  }
}

m.mount(document.body, body)