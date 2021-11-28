// const { mode } = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const isDev = process.env.NODE_ENV !== "production";

const path = require("path");
const glob = require("glob");
const globImporter = require("node-sass-glob-importer");

// const { HmtlWebpackPlugin } = require("html-webpack-plugin");
// const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
// const StylelintPlugin = require('stylelint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");
const SourceMapDevToolPlugin = require('webpack/lib/SourceMapDevToolPlugin');

module.exports = {
  mode: isDev,
  entry: {
    styles: ["./src/scss/styles.scss"],
    bundle: glob.sync("./src/js/**/*.js", {
      // ignore: [
        // "./src/js/test1.js",
        // "./src/js/test2.js",
      // ],
    }),
    // test1: ["./src/js/test1.js"],
    // test2: ["./src/js/test2.js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].min.js", // could be also: bundle.js
    // chunkFilename: "js/async/[name].chunk.js",
    pathinfo: true,
    // publicPath: "../",
    // publicPath: 'auto',
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // include all types of chunks
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].min.css",
    }),
    new CleanWebpackPlugin(),
    new SVGSpritemapPlugin([path.resolve(__dirname, "src/icons/**/*.svg")], {
      output: {
        filename: "icons/sprite.svg",
        svg: {
          sizes: false,
        },
      },
      sprite: {
        prefix: false,
        gutter: 0,
        generate: {
          title: false,
          symbol: true,
          use: true,
          view: "-view",
        },
      },
    }),
    new SourceMapDevToolPlugin({
      filename: 'sourcemaps/[file].map',
    }),
    // new StylelintPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(config.js)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              outputPath: "./",
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"],
      },
      {
        test: /modernizrrc\.js$/,
        loader: "modernizr",
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: isDev,
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.join(__dirname, "postcss.config.js"),
              },
              sourceMap: isDev,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDev,
              sassOptions: {
                importer: globImporter(),
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [path.join(__dirname, "node_modules")],
    extensions: [".js", ".json"],
  },
  watchOptions: {
    aggregateTimeout: 300,
  },
  // Tell us only about the errors.
  stats: "errors-only",
  // Suppress performance errors.
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
