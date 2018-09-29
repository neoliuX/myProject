const HtmlWebpackPlugin = require('html-webpack-plugin')
const rootPath = process.cwd();
const webpack = require('webpack')
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader')


const port = 80

module.exports = function (env) {
  const isProd = process.env.NODE_ENV || ''
  const [folder, pageList] = env.path.split("/")

	const configs = env.config ? env.config.split("|") : ''
  const outFileName = configs.indexOf('HASH') > -1 ? '[name].[chunkhash:8]' : '[name]'
  
  const srcFolder = path.join(__dirname, "src", folder)
	const distPath = path.join(__dirname, "dist", folder)
	const pathList = pageList.split(',').map(fileName => {
		const devPath = path.join(srcFolder, fileName)
		const devName = path.join(folder, fileName)

		return {
			fileName,
			devPath,
			devName
		}
  })
  // return
  let entry = {}
  pathList.forEach(item => {
    entry[item.fileName] = './' + path.join(folder, item.fileName, item.fileName + '.ts')
  })
  // console.log(entry, 8989)

  let plugins = [
    new VueLoaderPlugin(),
		new ExtractTextPlugin({
			filename: (getPath) => {
				return getPath(`./css/${outFileName}.css`).replace('css/js', 'css');
			},
			allChunks: true
		})
  ].concat(pathList.map(p => {
      return new HtmlWebpackPlugin({
        filename: p.fileName + '.html',
        chunks: [p.fileName],
        template: path.join(folder, p.fileName, p.fileName + '.ejs'),
        hash: true,
      })
    }
  ))
  // console.log(plugins, 111111)
  // return
  let config = {
		context: path.join(__dirname, 'src'),
    entry,
    output: {
			path: path.join(__dirname, 'dist', folder),
			publicPath: ``,
			filename: `./js/${outFileName}.bundle.js`,
			chunkFilename: "[name].[id].[chunkhash:8].min.js"
    },
    // stats: 'errors-only',
    devServer: {
        overlay: true, //报错的时候，在页面上弹出一个遮罩，并且把错误显示在上面
        port: port
    },
    plugins,
		externals: {
			jquery: "jQuery",
			vue: "Vue",
			Zepto: "Zepto",
			// TcPlayer: "TcPlayer",
			webim: "webim",
			// "pixi.js": "PIXI",
			// flvjs: "flvjs"
		},
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            extractCSS: true,
            loaders: {
              scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
              sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
            }
          }
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [{
              loader: "css-loader" // translates CSS into CommonJS
            }, {
              loader: "sass-loader", // compiles Sass to CSS
              options: {
                includePaths: [path.join(__dirname, "src/public/scss")],
                sourceMap: true
              }
            }, {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  const plugins = [ autoprefixer ]
                  return plugins
                }
              }
            }]
          })
          // use: [
          //     "style-loader", // creates style nodes from JS strings
          //     "css-loader", // translates CSS into CommonJS
          //     "sass-loader" // compiles Sass to CSS, using Node Sass by default
          // ]
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        }, 
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192
              }
            }
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
		resolve: {
			extensions: ['.ts', '.js', '.vue', '.json'],
			alias: {
				'vue$': 'vue/dist/vue.esm.js',
				'scss': path.join(__dirname, "src/public/scss"),
        '@src': path.resolve(process.cwd(), 'src/'),
        '@common': path.resolve(process.cwd(), 'src/common/'),
        '@public': path.resolve(process.cwd(), 'src/public/'),
			},
    },
    performance: { hints: false },
    // devtool: "inline-source-map"
  }
  return config
}