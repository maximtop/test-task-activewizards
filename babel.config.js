module.exports = (api) => {
  api.cache(false);

  const envOptions = {
    targets: {
      browsers: ['> 0.25%', 'not dead'],
      node: 'current',
    },
  };

  return {
    presets: [
      ['@babel/preset-env', envOptions],
      ['@babel/preset-react'],
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['react-hot-loader/babel'],
      ['@babel/plugin-transform-runtime'],
    ],
  };
};
