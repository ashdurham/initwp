module.exports = function(grunt) {
    
    var path = require("path").resolve(".");

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
            },
            root: {
                expand: true,
                cwd: 'wp-content/themes/custom/root/',
                src: ['*'],
                dest: './'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['copy:wp', 'copy:root', 'update_wp_paths']);

    grunt.registerTask('update_wp_paths', function() {
        
        grunt.file.delete('.git/');
        grunt.file.delete('wp/');
        grunt.file.delete('vendor/');
        grunt.file.delete('wp-config-sample.php');
        grunt.file.delete('composer.json');
        grunt.file.delete('composer.lock');
        grunt.file.delete('package.json');
        grunt.file.delete('readme.md');
        grunt.file.delete('node_modules/');
        grunt.file.delete('Gruntfile.js');
    });
}