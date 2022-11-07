module.exports = function(eleventyConfig) {

  return {
    dir: {
      input: 'src',
    },
    templateFormats: ['md', 'njk', 'html'],
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };
};