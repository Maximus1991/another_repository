module.exports = function(grunt) {

    grunt.initConfig({

        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['dist/js/main.js', 'dist/js/ggg.js'],
                dest: 'app/build.min.js',
            },
        },

        uglify: {
            my_target: {
                files: {
                    'app/build.min.js': ['app/build.min.js']
                }
            }
        },

        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                  "app/main.min.css": "dist/less/main.less" 
                }
            }
        },


        // cssmin: {
        //     options: {
        //         shorthandCompacting: false,
        //         roundingPrecision: -1
        //     },
        //     target: {
        //         files: {
        //             'app/main.min.css' : ['app/*.min.css']
        //         }
        //     }
        // },

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'app/*.css',
                        'app/*.js',
                        'app/*.html',
                    ]
                },
                options: {
                    server: './app',
                }
            }
        },


        watch: {
            stylesheets: {
                files: ['dist/less/*.less'],
                tasks: ['less', 'cssmin']
            },
            scripts: {
                files: ['dist/js/*.js'],
                tasks: ['uglify', 'concat']
            }
        }
});

    // Watcher
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.loadNpmTasks('grunt-browser-sync');


    // Js config
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    //  css config
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    grunt.registerTask('default', ['browserSync' ,'watch' ,'concat', 'uglify', 'cssmin', 'less']);

};