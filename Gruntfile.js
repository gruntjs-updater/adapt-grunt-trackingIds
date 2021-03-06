/*
 * adapt-grunt-trackingIds
 * https://github.com/kevadsett/adapt-grunt-trackingIds
 *
 * Copyright (c) 2013 Kev Adsett
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    adapt_insert_tracking_ids: {
        options: {
            courseFile: "course/en/course.json",
            blocksFile: "course/en/blocks.json"
        }
    },
    adapt_reset_tracking_ids: {
        options: {
            courseFile: "course/en/course.json",
            blocksFile: "course/en/blocks.json"
        }
    },
    adapt_remove_tracking_ids: {
        options: {
            courseFile: "course/en/course.json",
            blocksFile: "course/en/blocks.json"
        }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // By default, lint and insert tracking ids.
  grunt.registerTask('default', ['jshint', 'adapt_insert_tracking_ids']);
  grunt.registerTask('tracking-insert', ['jshint','adapt_insert_tracking_ids']);
  grunt.registerTask('tracking-reset', ['jshint','adapt_reset_tracking_ids']);
  grunt.registerTask('tracking-remove', ['jshint','adapt_remove_tracking_ids']);

};
