/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import store from './store/store'
import Vuelidate from 'vuelidate'
import Vuex from 'vuex';
require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('btn-def', require('./components/BtnDefault.vue').default);
Vue.component('btn-add-to-cart', require('./components/BtnAddToCart.vue').default);
Vue.component('reviews-carousel', require('./components/Reviews.vue').default);
Vue.component('page-footer', require('./components/Footer.vue').default);
Vue.component('top-header', require('./components/TopHeader.vue').default);
Vue.component('header-steps', require('./components/Steps.vue').default);
Vue.component('cart-total', require('./components/CartTotal.vue').default);
Vue.component('plus-minus-input', require('./components/PlusMinusInput.vue').default);
Vue.component('subscr-save', require('./components/SubscribeSave.vue').default);
Vue.component('customer-form', require('./components/CustomerForm.vue').default);
Vue.component('payment', require('./components/Payment.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(Vuex);
Vue.use(Vuelidate);

const app = new Vue({
    store,
    el: '#app',
});
