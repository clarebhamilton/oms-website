module.exports = {

    default: {
        files: [
            // includes files within path
            {
                expand: true,
                src: ['src/*'],
                dest: 'dist/public_html',
                filter: 'isFile',
                flatten: true,
                dot: true
            },

            // includes files within path and its sub-directories
            {
                expand: true,
                src: ['src/assets/posters/*'],
                dest: 'dist/public_html/assets/posters',
                filter: 'isFile',
                flatten: true
            }
        ]
    },
    dev: {
        files: [{
                expand: true,
                dot: true,
                cwd: 'dist/public_html/assets/css',
                dest: 'dist/public_html/assets/css/',
                src: [
                    'tidy.css'
                ],
                rename: function(dest, src) {
                    return dest + src.replace('.css', '.min.css');
                }
            }, {
                expand: true,
                dot: true,
                cwd: 'dist/public_html/assets/js',
                dest: 'dist/public_html/assets/js/',
                src: [
                    'tidy.js'
                ],
                rename: function(dest, src) {
                    return dest + src.replace('.js', '.min.js');
                }
            },

            // includes files within path and its sub-directories
            {
                expand: true,
                src: ['src/assets/img/*'],
                dest: 'dist/public_html/assets/img',
                filter: 'isFile',
                flatten: true
            }
        ]
    }

};