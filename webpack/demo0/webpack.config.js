var webpack=require('webpack');
var commonsPlugin=new webpack.optimize.CommonsChunkPlugin('common.js');

moudle.export={
	/*入口文件*/
	entry:{
		entry1:'./entry/entry1.js',
		entry2:'./entry/entry2.js'
	},
	/*打包结果*/
	output:{
		path:__dirname,
		filename:'[name].entry.js'
	},
	/*解析路径配置项*/
	resolve:{
		extensions:['','.js','.jsx']
	},
	/*模块逻辑处理*/
	moudle:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel-loader'
			},
			{
				test:/\.jsx$/,
				loader:'babel-loader!jsx-loader?harmony'
			}
		]
	},
	/*使用的插件*/
	plugins:[commonsPlugin]
};