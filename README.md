[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![tests][tests]][tests-url]
[![coverage][cover]][cover-url]
[![chat][chat]][chat-url]

<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>YAML Frontmatter Loader</h1>
</div>

YAML Frontmatter loader for [webpack](https://webpack.js.org/). Converts YAML in files to JSON. You should chain it with [json-loader](https://github.com/webpack/json-loader).

<h2 align="center">Install</h2>

`npm install yaml-frontmatter-loader`

<h2 align="center"><a href="https://webpack.js.org/concepts/loaders/">Usage</a></h2>

```js
var json = require("json-loader!yaml-frontmatter-loader!./file.md");
// => returns file.md as javascript object
```

### Configuration

**webpack.config.js**
```js
module.exports = {
  module: {
    rules: [
      {
         test: /\.md$/,
         use: [ 'json-loader', 'yaml-frontmatter-loader' ]
      }
    ]
  }
}
```

[npm]: https://img.shields.io/npm/v/yaml-frontmatter-loader.svg
[npm-url]: https://npmjs.com/package/yaml-frontmatter-loader

[node]: https://img.shields.io/node/v/yaml-frontmatter-loader.svg
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/webpack-contrib/yaml-frontmatter-loader.svg
[deps-url]: https://david-dm.org/webpack-contrib/yaml-frontmatter-loader

[tests]: http://img.shields.io/travis/webpack-contrib/yaml-frontmatter-loader.svg
[tests-url]: https://travis-ci.org/webpack-contrib/yaml-frontmatter-loader

[cover]: https://codecov.io/gh/webpack-contrib/yaml-frontmatter-loader/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/yaml-frontmatter-loader

[chat]: https://badges.gitter.im/webpack/webpack.svg
[chat-url]: https://gitter.im/webpack/webpack
