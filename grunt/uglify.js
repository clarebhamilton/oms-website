module.exports = {
    options: {
        //banner: '/*! tidy <%= grunt.template.today("dd-mm-yyyy") %> */\n'
    },
    dist: {
        files: {
            'dist/public_html/assets/js/tidy.min.js': ['dist/public_html/assets/js/tidy.js']
        }
    }
};