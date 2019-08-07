/* eslint-disable */

// Workaround for babel import aliases
System.config({
  paths: {
    '@Application/*': './src/application/*',
    '@Common/*': './src/common/*',
    '@Player/*': './src/player/*',
  },
});
