import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _130b0281 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _3dd63b69 = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _f7f715ea = () => interopDefault(import('../pages/TechJourney.vue' /* webpackChunkName: "pages/TechJourney" */))
const _70b7bc73 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _130b0281,
    name: "contact"
  }, {
    path: "/projects",
    component: _3dd63b69,
    name: "projects"
  }, {
    path: "/TechJourney",
    component: _f7f715ea,
    name: "TechJourney"
  }, {
    path: "/",
    component: _70b7bc73,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
