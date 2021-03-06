
import moment from "moment";
Vue.filter('time',function(date){
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
});

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);



import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
