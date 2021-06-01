const withImages = require('next-images');
const withVideos = require('next-videos');

module.exports = withVideos(withImages({
  webpack(config) {
    return config
  }
}));