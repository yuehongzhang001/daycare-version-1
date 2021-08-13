// const path = require("path"); //Node.js内置模块
module.exports = {
    publicPath: '/',
    outputDir: 'front',
    pages:{
        admin:{
            entry: './src/admin/admin.js',
            template: 'public/admin/index.html',
            filename: 'admin/index.html'
        },
        index:{
            entry: './src/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    }
}