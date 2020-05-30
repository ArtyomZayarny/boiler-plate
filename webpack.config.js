const path = require('path');
const MiniCssExtractPagin = require('mini-css-extract-plugin');

module.exports = {
    mode:'development',
    context: path.resolve(__dirname,'src'),
    entry:'./style.scss',
    module: {
        rules:[
            {
                test:/\.(scss|css)$/,
                exclude:/node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPagin.loader,
                        options: {reloadAll:true}
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [new MiniCssExtractPagin({
        filename:'[name].css'
    })]

}
