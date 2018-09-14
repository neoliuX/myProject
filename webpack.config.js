const HtmlWebpackPlugin = require('html-webpack-plugin')
const rootPath = process.cwd();
const webpack = require('webpack')
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader')


const port = 80

module.exports = function (env) {
  // console.log(env.path)
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
    entry[item.fileName] = './' + path.join(folder, item.fileName, item.fileName + '.js')
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
        template: path.join(folder, p.fileName, p.fileName + '.html'),
        hash: true,
      })
    }
  ))
  console.log(plugins, 111111)
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
    devServer: {
        overlay: true, //报错的时候，在页面上弹出一个遮罩，并且把错误显示在上面
        port: port
    },
    plugins,
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            extractCSS: true,
            loaders: {
              // css: ExtractTextPlugin.extract({
              //   use: 'css-loader',
              //   fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
              // }),
              scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
              sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
            }
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
          use: [
              "style-loader", // creates style nodes from JS strings
              "css-loader", // translates CSS into CommonJS
              "sass-loader" // compiles Sass to CSS, using Node Sass by default
          ]
        },
        // {
        //   test: /\.css$/,
        //   use: [
        //     { loader: "style-loader" },
        //     { loader: "css-loader" }
        //   ]
        // },
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
    }
  }
  return config
}