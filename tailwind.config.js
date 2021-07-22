module.exports = {
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      marked: '#8F8F8F',
      secondary: '#ffed4a',
      danger: '#e3342f',
    }),
    extend: {
      height: {
        '90vh': '90vh',
        '10vh': '10vh',
      },
      inset: {
        '10vh': '10vh',
      },
    },
  },
};
