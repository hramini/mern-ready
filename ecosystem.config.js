const gna = ['--trace-deprecation', '--trace-warnings'];

module.exports = {
  apps: [
    {
      name: 'back',
      script: 'npm run back-start',
    },
    {
      name: 'front',
      script: 'npm run front-build-watch',
    },
  ],
};
