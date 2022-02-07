#ThymeLeaf Tag Injector

A html webpack plugin to inject thymeleaf compatible template tags for script and style tags


// Usage example
import WebpackPluginInjectThymeTags from 'html-webpack-plugin-inject-thyme-leaf-tags';

under webpack config plugin section add


plugins: [
	new HtmlWebpackPlugin({
		template: path.join(__dirname, "src", "index.html"),
	}),

	new HtmlWebpackPluginGvoInjectTags({
		stylePrefix: "/static/",
		scriptPrefix: "/static/",
	}),
]

you can an empty object for no prefix like this


new HtmlWebpackPluginGvoInjectTags({}),

or like this

new HtmlWebpackPluginGvoInjectTags(),