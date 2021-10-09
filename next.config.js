// use nextjs rewrites option for path mapping
module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/Homepage',
      },
    ];
  },
};
