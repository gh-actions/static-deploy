importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/13cb5a970a909c5a6abe.js",
    "revision": "21ef8b4368bfe4e0c5af7f5b4b942fb0"
  },
  {
    "url": "/_nuxt/3551393fc5efe40fae19.js",
    "revision": "463f7ba997dcf21546199219a33c370c"
  },
  {
    "url": "/_nuxt/752c381c094269b4cebf.js",
    "revision": "5e4bca659f3f71c94d9fd58985d5a498"
  },
  {
    "url": "/_nuxt/a0622a91686344759a50.js",
    "revision": "ca457c62517259945f9ff54f22da6dd6"
  },
  {
    "url": "/_nuxt/aa603cae9f550d87faf0.js",
    "revision": "5ca74f9d6ee61b9ea57beddcede005a8"
  },
  {
    "url": "/_nuxt/ec2a47c987b55a2b16c6.js",
    "revision": "9e345f876204d235292097aa413683f8"
  }
], {
  "cacheId": "static-deploy",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
