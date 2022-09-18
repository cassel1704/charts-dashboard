module.exports = {
  plugins: [
    require("postcss-preset-env")({ stage: 0 }),
    require("postcss-mixins")({}),
    require("postcss-simple-vars")({ silent: true }),
    require("postcss-color-function")({}),
    require("autoprefixer")({}),
    require("postcss-nested")({}),
  ],
};
