const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  eleventyConfig.addLiquidFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj).setLocale('fr').toLocaleString(DateTime.DATE_FULL);
  });

  // Copie le dossier 'img' et le fichier 'style.css' vers le site final
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("style.css");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
