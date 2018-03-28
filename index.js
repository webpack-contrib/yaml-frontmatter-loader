const frontmatter = require('front-matter');

module.exports = function yamlLoader(source) {
  if (this.cacheable) {
    this.cacheable();
  }

  return JSON.stringify(frontmatter(source));
};
