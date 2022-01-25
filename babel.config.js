module.exports = {
  plugins: [
    // https://github.com/babel/babel/issues/8562
    [require.resolve("@babel/plugin-proposal-decorators"), { legacy: true }],
    require.resolve("@babel/plugin-transform-runtime"),
    require.resolve("babel-plugin-add-module-exports"),
    require.resolve("@babel/plugin-proposal-class-properties"),
    require.resolve("@babel/plugin-syntax-dynamic-import"),
    require.resolve("babel-plugin-react-docgen"),
  ],
  presets: [
    [
      "@babel/env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
        },
        useBuiltIns: "usage",
        corejs: "3.6.5",
      },
    ],
    "@babel/preset-react",
  ],
};
