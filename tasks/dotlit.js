/*
 * grunt-dotlit
 * https://github.com/vagrant/gruntplugin
 *
 * Copyright (c) 2013 Zoopdoop, LLC
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var dotlit = require('dotlit/lib/dotlit.js').dotlit;

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('dotlit', 'Literate programming source code processor', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      extractAll: true,
      extractFiles: [],
      verbose: false,
      force: false,

      // options we are not exposing in the documentation
      help: false,
      list: false,
      printAll: false,
      file: null,
      render: null,
      printFiles: [],
      error: false
    }), 
    done;
    
    this.files.forEach(function (file) {
      dotlit.dotlit({
        file: file,
        extractAll: options.extractAll,
        extractFiles: options.extractFiles,
        verbose: options.verbose,
        force: options.force
      });
    });
  });

};
