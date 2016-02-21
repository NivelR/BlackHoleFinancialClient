'use strict';

module.exports = {
  client: {
    source: ['src/**/*.{html,css,ico}', '!**/app/**'],
    destination: 'dist/client',
    app: ['src/**/*.js']
  },
  general: {
    source: ['package.json', 'Procfile'],
    destination: 'dist'
  },
  liveReload: {
    port: 35729
  },
  build: {
    destination: 'dist'
  }
};
