module.exports = {

    options: {
        // define a string to put between each file in the concatenated output
        //separator: ';'
    },
    dist: {
        // the files to concatenate
        src: ['src/assets/js/script.js'],
        // the location of the resulting JS file
        dest: 'dist/public_html/assets/js/tidy.js'
    }
};