# adapt-grunt-trackingIds

> Automates the insertion and removal of SCORM tracking IDs into <a href="https://community.adaptlearning.org/" tartget = "_blank">Adapt</a> courses.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install adapt-grunt-tracking-ids --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('adapt-grunt-tracking-ids');
```

## The trackingId tasks

### Overview
There are three available tasks for trackingIds: `adapt_insert_tracking_ids`, `adapt_reset_tracking_ids` and `adapt_remove_tracking_ids`.

In your project's Gruntfile, add a section with each of these names to the data object passed into `grunt.initConfig()`. Each section should take the same options. E.g.:

```js
grunt.initConfig({
  adapt_insert_tracking_ids: {
    options: {
        courseFile: "src/course/en/course.json",
        blocksFile: "src/course/en/blocks.json"
    }
  },
})
```

### Options

#### options.courseFile
Type: `String`
Default value: `'src/course/en/course.json'`

A string representation of the JSON file which contains the course information.

#### options.blocksFile
Type: `String`
Default value: `'src/course/en/course.json'`

A string representation of the JSON file which contains the blocks for the course.
