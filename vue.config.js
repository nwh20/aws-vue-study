module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/myganada_frontend/'
        : '/',
    outputDir: 'docs'
}