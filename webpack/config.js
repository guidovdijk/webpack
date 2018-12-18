module.exports = {
    entry: "./src/index.js",
    output: "../dist",
    prod: {
        src: {
            js: "../dist/js",
            style: "../dist/style"
        }
    },
    dev: {
        src: {
            js: "../src/js",
            style: "../src/style"
        }
    },
    static: {
        fonts: "../static/fonts",
        images: "../static/images",
        svg: "../static/svg",
        icons: "../static/icons"
    }
}