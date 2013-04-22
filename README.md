# grunt-dotlit

> Grunt plugin for dotlit - a literate programming source code processor

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-dotlit --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-dotlit');
```

## The "dotlit" task

### Overview
In your project's Gruntfile, add a section named `dotlit` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dotlit: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.extractAll
Type: `Boolean`
Default value: `true`

A boolean value that controls if all the named files in the dotlit file will be extracted.

#### options.extractFiles
Type: `Array`
Default value: `[]`

An array of named files in the dotlit file to extract

#### options.verbose
Type: `Boolean`
Default value: `false`

A boolean value that controls the amount of text displayed while running dotlit

#### options.force
Type: `Boolean`
Default value: `false`

A boolean value that if true will override the confirmation when creating files outside of the dotlit source folder

### Usage Examples

    module.exports = function(grunt) {

      // Add our custom tasks.
      grunt.loadNpmTasks('grunt-dotlit');
      grunt.loadNpmTasks('grunt-contrib-watch');
      
      // Project configuration.
      grunt.initConfig({
        dotlit: {
          options: {
            verbose: false,
            extractAll: true
          },
          files: ['lit/**/*.lit.md']
        },
        watch: {
          files: ['lit/**/*.lit.md'],
          tasks: ['dotlit']
        }
      });

      // Default task.
      grunt.registerTask('default', ['dotlit']);
    };
        
## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
