module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/robots.txt");

  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk');
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');

  return {
    dir: {
      input: 'src',
    },
    templateFormats: ['md', 'njk', 'html'],
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };

};