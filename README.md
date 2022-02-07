#ThymeLeaf Tag Injector

A html webpack plugin to inject thymeleaf compatible template tags for script and style tags


## Installation

```js

	yarn add -D html-webpack-plugin-inject-thyme-leaf-tags
	
```

## Usage example
```js

import WebpackPluginInjectThymeTags from 'html-webpack-plugin-inject-thyme-leaf-tags';

```

under webpack config plugin section add

```js

plugins: [
	new HtmlWebpackPlugin({
		template: path.join(__dirname, "src", "index.html"),
	}),

	new HtmlWebpackPluginGvoInjectTags({
		stylePrefix: "/static/",
		scriptPrefix: "/static/",
	}),
]

```
you can an empty object for no prefix like this


```ts

new HtmlWebpackPluginGvoInjectTags({}),

```

or like this

```ts 

new HtmlWebpackPluginGvoInjectTags(),

```
