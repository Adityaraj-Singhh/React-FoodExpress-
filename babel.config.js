
module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}],
    ["@babel/preset-react", { runtime: "automatic" }], //We use this - As it converts JSX to HTML so that it can be read by test cases.
  ],
  };