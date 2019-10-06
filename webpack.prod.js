const { resolve } = require('path');
const rxPaths = require('rxjs/_esm5/path-mapping');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { CleanCssWebpackPlugin } = require('@angular-devkit/build-angular/src/angular-cli-files/plugins/cleancss-webpack-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const { IndexHtmlWebpackPlugin } = require('@angular-devkit/build-angular/src/angular-cli-files/plugins/index-html-webpack-plugin');
const { SuppressExtractedTextChunksWebpackPlugin } = require('@angular-devkit/build-angular/src/angular-cli-files/plugins/suppress-entry-chunks-webpack-plugin');
const { HashedModuleIdsPlugin } = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {

  mode: 'production',
  entry: {
    main: './src/main.ts',
    polyfills: './src/polyfills.ts',
    styles: './src/styles.css'
  },

  output: {
    path: resolve('./dist'),
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.ts', '.js'],
    alias: rxPaths()
  },

  node: false,

  performance: {
    hints: false,
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: '@ngtools/webpack'
      },
      {
        test: /\.js$/,
        loader: '@angular-devkit/build-optimizer/webpack-loader',
        options: { sourceMap: false }
      },
      {
        test: /\.js$/,
        exclude: /(ngfactory|ngstyle).js$/,
        enforce: 'pre',
        use: 'source-map-loader'
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: ['to-string-loader', 'css-loader'],
        exclude: [resolve('./src/styles.css')]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        include: [resolve('./src/styles.css')]
      },
      {
        test: /\.(eot|svg|cur)$/,
        loader: 'file-loader',
        options: {
          name: `[name].[ext]`,
          limit: 10000
        }
      },
      {
        test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
        loader: 'url-loader',
        options: {
          name: `[name].[ext]`,
          limit: 10000
        }
      },

      // This hides some deprecation warnings that Webpack throws

      {
        test: /[\/\\]@angular[\/\\]core[\/\\].+\.js$/,
        parser: { system: true },
      }
    ]
  },

  optimization: {
    noEmitOnErrors: true,
    runtimeChunk: 'single',
    minimize: true,
    splitChunks: {
      cacheGroups: {
        default: {
          chunks: 'async',
          minChunks: 2,
          priority: 10
        },
        common: {
          name: 'common',
          chunks: 'async',
          minChunks: 2,
          enforce: true,
          priority: 5
        },
        vendors: false,
        vendor: false
      }
    },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: undefined,
          warnings: false,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        },
      }),
      new HashedModuleIdsPlugin(),
      new CleanCssWebpackPlugin({
        sourceMap: false,
        test: (file) => /\.(?:css)$/.test(file),
      })
    ]
  },

  plugins: [
    new IndexHtmlWebpackPlugin({
      input: resolve('./src/index.html'),
      output: 'index.html',
      entrypoints: [
        'styles',
        'polyfills',
        'main',
      ]
    }),

    new AngularCompilerPlugin({
      mainPath: resolve('./src/main.ts'),
      sourceMap: false,
      nameLazyFiles: false,
      tsConfigPath: resolve('./tsconfig.app.json'),
      skipCodeGeneration: false,
      hostReplacementPaths: {
        [resolve('src/environments/environment.ts')]: resolve('src/environments/environment.prod.ts')
      }
    }),

    new MiniCssExtractPlugin({ filename: '[name].css' }),

    new SuppressExtractedTextChunksWebpackPlugin(),

    new ProgressPlugin(),

    new CircularDependencyPlugin({
      exclude: /[\\\/]node_modules[\\\/]/
    }),

    new CopyWebpackPlugin([
      {
        from: 'src/assets',
        to: 'assets'
      },
      {
        from: 'src/favicon.ico'
      }
    ])
  ]
};