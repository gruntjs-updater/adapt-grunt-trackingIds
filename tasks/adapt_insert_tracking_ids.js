/*
 * grunt-adapt-tracking-ids
 * https://github.com/kevadsett/trackingIds-plugin
 *
 * Copyright (c) 2013 Kev Adsett
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    
    grunt.registerTask('adapt_insert_tracking_ids', 'Automates the insertion of SCORM tracking IDs.', function() {
        
        var options = this.options({
            _latestTrackingId: -1,
            _trackingIdsSeen: []
        });
        
        function insertTrackingIds(blocks, course){
            options.latestTrackingId = course.latestTrackingId || -1;
            
            for(var i = 0; i < blocks.length; i++) {
                var block = blocks[i];
                if(block._trackingId === undefined) {
                    block._trackingId = ++options._latestTrackingId;
                    grunt.log.writeln("Adding tracking ID: " + block._trackingId + " to block " + block._id);
                } else {
                    if(options._trackingIdsSeen.indexOf(block._trackingId) > -1) {
                        grunt.log.writeln("Warning: " + block._id + " has the tracking ID " + block._id + ", but this is already in use. Changing to " + (options._latestTrackingId + 1) + ".");
                        block._trackingId = ++options._latestTrackingId;
                    }
                }
                if(options._latestTrackingId < block._trackingId) {
                    options._latestTrackingId = block._trackingId;
                }
                    
            }
            course._latestTrackingId = options._latestTrackingId;
            grunt.log.writeln("The latest tracking ID is " + course._latestTrackingId);
            grunt.file.write(options.courseFile, JSON.stringify(course, null, "    "));
            grunt.file.write(options.blocksFile, JSON.stringify(blocks, null, "    "));
        }
        
        insertTrackingIds(grunt.file.readJSON(options.blocksFile), grunt.file.readJSON(options.courseFile));
    });
};
