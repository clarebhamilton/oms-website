module.exports = {

    options: {
        start_comment: "test-code",
        end_comment: "end-test-code",
    },
    your_target: {
        // a list of files you want to strip code from
        src: "dist/public_html/js/*.js"
    }
};