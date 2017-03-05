const frontmatter = require('front-matter');

module.exports = function (source) {
  this.cacheable && this.cacheable();

  return JSON.stringify(frontmatter(source));
}
