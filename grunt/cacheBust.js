module.exports = {

    options: {
        encoding: 'utf8',
        algorithm: 'md5',
        length: 16,
        deleteOriginals: true,
        assets: ['assets/**/*'],
        baseDir: 'dist/public_html/'
    },

    src: ['dist/public_html/index.html']

};