import Vue from 'vue';
import Axios from 'axios';
import VueRouter from 'vue-router';
import VuexRouterSync from 'vuex-router-sync';

import routes from '@/routes';
import store from '@/store';

Vue.config.debug = process.env.NODE_ENV !== 'productions';

Axios.defaults.baseURL = process.env.API_LOCATION;
Axios.defaults.headers.common.accept = 'application/json';

Vue.prototype.$http = Axios;
// Object.defineProperties(Vue.prototype, '$http', {
//   get() {
//     return Axios;
//   },
// });

Vue.prototype.$http = Axios;

Vue.use(VueRouter);

export const router = new VueRouter({
  routes,
});
VuexRouterSync.sync(store, router);

Vue.router = router;

// import '@/assets/stylus/app.styl';

export default {
  router,
};
