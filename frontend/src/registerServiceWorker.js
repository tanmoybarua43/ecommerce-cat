// vue.config.js
module.exports = {
    pwa: {
      workboxPluginMode: 'GenerateSW',  // or 'InjectManifest' if you want more control and write your own service worker
      workboxOptions: {
        skipWaiting: true,
        clientsClaim: true,
        exclude: [/\.map$/, /_redirects/], // Exclude map files and _redirects from the precache
        runtimeCaching: [
          {
            urlPattern: new RegExp('^https://api.mybackend.com/'),
            handler: 'NetworkFirst',
            options: {
              networkTimeoutSeconds: 20,
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 300 // cache for 5 minutes
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    }
  }
  