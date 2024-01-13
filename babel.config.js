module.exports = {
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
        'module:@react-native/babel-preset',
      ],
    },
  },
  plugins: [['@babel/plugin-proposal-private-property-in-object', { loose: true }]],
};
