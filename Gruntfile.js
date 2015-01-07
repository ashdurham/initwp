module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            wp: {
                expand: true,
                cwd: 'wp/',
                src: ['**/*'],
                dest: './'
//                options: {
//                    process: function(content, srcpath) {
//                        return content.replace(/wp\-/g, "wp/wp-");
//                    }
//                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['copy:wp', 'update_wp_paths']);

    grunt.registerTask('update_wp_paths', function() {

        var fs = require('fs');
        var path = require('path');
        
        grunt.file.delete('.git/');
        grunt.file.delete('wp/');
        grunt.file.delete('vender/');
        grunt.file.delete('composer.json');
        grunt.file.delete('composer.lock');
        grunt.file.delete('package.json');
        grunt.file.delete('readme.md');
        grunt.file.delete('Gruntfile.js');
        grunt.file.delete('node_modules/');
    });
}