const webpack = require("webpack");
const rootPath = process.cwd();
const path = require('path');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const sourcePath = path.join(__dirname, './src');
const staticsPath = path.join(__dirname, './dist');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //发布前删除目录
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const BeautifyHtmlPlugin = require('./webpack/plugin/beautify-html')
const ModifyFilePath = require('./webpack/plugin/modify-file-path')
const MoveFolder = require('./webpack/plugin/move-folder')

const port = 3000;

module.exports = function (env) {
	const nodeEnv = process.env.NODE_ENV
	const isProd = nodeEnv === 'pro'

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

	const plugins = [
		new webpack.EnvironmentPlugin({
			NODE_ENV: nodeEnv,
		}),
		new webpack.NamedModulesPlugin(),
		new BeautifyHtmlPlugin(),
		new LodashModuleReplacementPlugin,
		new ExtractTextPlugin({
			filename: (getPath) => {
				return getPath(`./css/${outFileName}.css`).replace('css/js', 'css');
			},
			allChunks: true
		})
  ].concat(pathList.map(p =>
		new HtmlWebpackPlugin({
			filename: p.fileName + '.html',
			chunks: [p.fileName],
			template: path.join(folder, p.fileName, p.fileName + '.ejs'),
			hash: true,
		})
	))

	if (isProd) {
		plugins.push(
			new webpack.LoaderOptionsPlugin({
				minimize: true,
				debug: false
			}),
			// new CleanWebpackPlugin(['dist']),
			new ModifyFilePath({
				folder
			}),
			new MoveFolder([{
				from: path.join(srcFolder, 'json'),
				to: path.join(distPath, 'json')
			},{
				from: path.join(srcFolder, 'lang'),
				to: path.join(distPath, 'lang')
			}]),
			new webpack.DefinePlugin({ 
				'staticPath': `"//static.gtarcade.com/miniclient/${folder}/"`
			}),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false,
					screw_ie8: true,
					conditionals: true,
					unused: true,
					comparisons: true,
					sequences: true,
					dead_code: true,
					evaluate: true,
					if_return: true,
					join_vars: true,
				},
				output: {
					comments: false,
				},
			})
		);
	} else {
		plugins.push(
			new webpack.DefinePlugin({ 
				'staticPath': `"../"`
			})
		)
	}

	let entry = {}
	pathList.forEach(p => {
		console.log('项目运行地址：\x1b[36m%s\x1b[0m', `http://localhost:${port}/${p.fileName}.html`)
		entry[p.fileName] = './' + path.join(folder, p.fileName, p.fileName + '.ts')
	})
	const config = {
		context: path.join(__dirname, 'src'),
		entry,
		output: {
			path: path.join(__dirname, 'dist', folder),
			publicPath: ``,
			filename: `./js/${outFileName}.bundle.js`,
			chunkFilename: "[name].[id].[chunkhash:8].min.js"
		},
		plugins,
		externals: {
			jquery: "jQuery",
			vue: "Vue",
			Zepto: "Zepto",
			TcPlayer: "TcPlayer",
			webim: "webim",
			"pixi.js": "PIXI",
			flvjs: "flvjs"
		},
		module: {
			rules: [{
				test: /\.(ts|vue)$/,
				enforce: "pre",
				exclude: /node_modules/,
				loader: "eslint-loader",
				options: {
					// fix: true
				}
			}, {
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						// Since sass-loader (weirdly) has SCSS as its default parse mode, we map
						// the "scss" and "sass" values for the lang attribute to the right configs here.
						// other preprocessors should work out of the box, no loader config like this necessary.
						scss: 'vue-style-loader!css-loader!sass-loader',
						sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
					},
					// other vue-loader options go here
					esModule: true
				}
			}, {
				test: /\.(html)(\?.*$|$)/,
				exclude: /node_modules/,
				use: {
					loader: 'file-loader',
					query: {
						name: '[name].[ext]'
					},
				},
			}, {
				test: /\.(mp3|mp4)$/,
				exclude: /node_modules/,
				loader: `file-loader?outputPath=images/&publicPath=./&name=[hash:12].[ext]`
			}, {
				test: /\.(jpg|jpeg|gif|png)$/,
				exclude: /node_modules/,
				loader: [
					`url-loader?limit=4112&outputPath=images/&publicPath=${isProd ? `//static.gtarcade.com/miniclient/${folder}/images` : '../images'}/&name=[hash:12].[ext]`
				]
			},
			// {
			// 	test: /\.(gif|png)$/,
			// 	exclude: /node_modules/,
			// 	loader: [
			// 		{
			// 		  loader: 'image-webpack-loader',
			// 		  options: {
			// 				bypassOnDebug: true,
			// 		  },
			// 		}
			// 	]
			// }, 
			{
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				exclude: /node_modules/,
				loader: `url-loader?limit=4112&outputPath=images/&publicPath=./&name=[hash:12].[ext]`
			}, {
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					'css-loader'
				]
			}, {
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
			}, {
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			}, {
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					appendTsSuffixTo: [/\.vue$/]
				}
			}, {
				test: /\.ejs$/,
				loader: 'ejs-compiled-loader?htmlmin',
				exclude: /node_modules/,
			}]
		},
		resolve: {
			extensions: ['.ts', '.js', '.vue', '.json'],
			alias: {
				'vue$': 'vue/dist/vue.esm.js',
				'scss': path.join(__dirname, "src/public/scss")
			},
		},

		performance: isProd && {
			maxAssetSize: 100000,
			maxEntrypointSize: 60000000,
			hints: 'warning',
		},

		stats: {
			colors: {
				green: '\u001b[32m',
			}
		},
		devtool: !isProd ? 'source-map' : '',
		devServer: isProd ? {} : {
			contentBase: ['src', 'src/' + folder],
			historyApiFallback: true,
			port,
			compress: isProd,
			inline: !isProd,
			// hot: !isProd,
			historyApiFallback: true,
			watchOptions: {
				poll: true
			},
			stats: {
				assets: true,
				children: false,
				chunks: false,
				hash: false,
				modules: false,
				publicPath: false,
				timings: true,
				version: false,
				warnings: true,
				colors: {
					green: '\u001b[32m',
				}
			},
		}
	}

	// 如果是公共的资源
	if (folder === 'public' && isProd) {
		const srcConfig = Object.assign({}, config)
		srcConfig.output.path = path.join(__dirname, 'dist', folder)
		return [config, srcConfig]
	}

	return config
}