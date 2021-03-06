import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)
Vue.use(AmplifyPlugin, AmplifyModules)

Vue.config.productionTip = false

import {AmplifyEventBus} from 'aws-amplify-vue';

AmplifyEventBus.$on('authState', info => {
  console.log(`Here is the auth event that was just emitted by an Amplify component: ${info}`)
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
