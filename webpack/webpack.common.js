const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // points to entrypoint of our app
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  // allows us to resolve and leave off file extension when importing
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            // use babel loader for all js and ts files excluding node libraries
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    // we say where to place our bundled code and the folder it should fgo in
    filename: 'bundle.js',
  },
  plugins: [
    // injects the bundles js file and places it into the html file then puts html file in build folder
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
  stats: 'errors-only',
};
