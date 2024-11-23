module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Add this if using Ant Design RN
      ['import', { libraryName: '@ant-design/react-native' }],
    ],
  };
};