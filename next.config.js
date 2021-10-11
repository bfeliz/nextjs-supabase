module.exports = {
  // use nextjs rewrites option for path mapping
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/Homepage',
      },
      {
        source: '/form',
        destination: '/Form',
      },
    ];
  },
};
