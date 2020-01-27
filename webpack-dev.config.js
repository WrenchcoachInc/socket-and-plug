const path = require('path');
const fs = require('fs');

const package_json = JSON.parse(fs.readFileSync('package.json'));
const { filename, libraryName } = package_json;

module.exports = {
    mode: 'development',
    entry: './src/SocketAndPlug.js',
    output: {
        filename: `${filename}.js`,
        path: path.resolve(__dirname, 'dist'),
        library: libraryName,
        libraryTarget: 'umd',
    },
    devtool: 'eval-source-map',
};
