var webpack=require('webpack');
module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({ jQuery: "jquery", $: "jquery" })
        ]
    }
}