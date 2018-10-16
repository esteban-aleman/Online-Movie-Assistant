const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
              presets: ['env', 'react'],
              plugins: ['transform-class-properties','transform-object-rest-spread']
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
          test: /\.scss$/,
          use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader"
          ]

      },
      {
          test: /\.css$/,
          use: [
              "style-loader",
              "css-loader"
          ]
      },
      {
          test: /\.(png|jpg|gif)$/,
          use: [
              {
                  loader: 'file-loader',
                  options: {}
              }
          ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};