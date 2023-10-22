const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
  //shortcodes
  eleventyConfig.addShortcode('icon', (arg) => `<i class="${arg}"></i>`);
  eleventyConfig.addShortcode('logo', (arg) => `<img src="/img/site/logo-${arg}.png" />`);

  eleventyConfig.addPassthroughCopy({"src/img": "img"});

  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  eleventyConfig.addFilter("renderRichTextAsHtml", (value) =>
    documentToHtmlString(value)
  );

  /**************** Markdown Plugins********************/
  let markdownIt = require("markdown-it");
  var markdownItAttrs = require('markdown-it-attrs');
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  let markdownLib = markdownIt(options).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);
  const markdownItRenderer = new markdownIt();

  eleventyConfig.addFilter('markdownify', (str) => {
    return markdownItRenderer.renderInline(str);
  });

  // Set custom directories for input, output, includes, and data
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };

};