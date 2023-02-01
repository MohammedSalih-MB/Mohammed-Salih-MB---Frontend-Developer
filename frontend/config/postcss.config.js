module.exports = {
  plugins: [
    // Plugins for PostCSS
    "postcss-import",
    "postcss-preset-env",
    ["cssnano", { zindex: false }]
  ],
};
