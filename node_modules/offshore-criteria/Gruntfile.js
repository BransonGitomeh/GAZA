module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      bower: ['lib']
    },

    replace: {
      bower: {
        src: ['index.js'],
        dest: 'lib/offshore-criteria.js',
        replacements: [{
          from: 'module.exports',
          to: 'window.WC'
        }, {
          from: 'require(\'lodash\')',
          to: 'window._'
        }, {
          from: /([\s\S]*)/,
          to: '(function (window) {\n$1\n})(window);\n'
        }]
      }
    },

    uglify: {
      bower: {
        src: 'lib/offshore-criteria.js',
        dest: 'lib/offshore-criteria.min.js'
      }
    }
  });

  grunt.registerTask('default', ['clean', 'replace', 'uglify']);
};
