// Generated on 2014-03-06 using generator-angular 0.7.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({


        concat:{ generated:{ files:[
            { dest:'.tmp\\concat\\scripts\\sendToRemindIt_all.js',
                src:[ 'src\\main\\webapp\\js\\bookmarklet\\jquery-css-deprecated-dimensions-effects-event-alias-offset-wrap.js',
                    'src\\main\\webapp\\js\\bookmarklet\\html2canvas.js',
                    'src\\main\\webapp\\js\\bookmarklet\\jquery.base64.js',
                    'src\\main\\webapp\\js\\bookmarklet\\sendToRemindIt.js'] }
        ] } },

        uglify:{ generated:{ files:[
            { dest:'src\\main\\webapp\\js\\bookmarklet\\sendToRemindIt_all.min.js',
                src:[ '.tmp\\concat\\scripts\\sendToRemindIt_all.js' ] },
            { dest:'src\\main\\webapp\\js\\bookmarklet\\bookmarklet.min.js',
                src:[ 'src\\main\\webapp\\js\\bookmarklet\\bookmarklet.js' ] }
        ] } },


        // Empties folders to start fresh
        clean:{
            generated:{
                files:[
                    {
                        dot:true,
                        src:[
                            '.tmp',
                            'sendToRemindIt_all.min.js',
                            'bookmarklet.min.js'
                        ]
                    }
                ]
            }
        }
    });

    grunt.registerTask('build', [
        'clean:generated',
        'concat',
        'uglify'
    ]);

};
