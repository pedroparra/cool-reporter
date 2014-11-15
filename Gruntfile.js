'use strict';
module.exports = function(grunt){

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({

    // Reload jshint
    watch: {
      gruntfile: {
        files: ['Gruntfile.js'],
        tasks: ['jshint:js']
      },
      js: {
        files: ['reporter.js','./test/**/*.js'],
        tasks: ['jshint:js']
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: './reporter'
      },
      js: {
        src: ['Gruntfile.js','reporter.js']
      }
    }

  });

  grunt.registerTask('default', ['watch','jshint:js']);


};
