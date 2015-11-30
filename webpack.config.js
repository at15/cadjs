/**
 * Created by gpl on 15/11/30.
 */
module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: './build/bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'}
        ]
    }
};