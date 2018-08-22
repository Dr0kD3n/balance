import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import './registerServiceWorker'
import BootstrapVue from 'bootstrap-vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon/'


Icon.register({
	'bell': {
		width: 64,
		height: 64,
		raw: '<?xml version="1.0" ?><svg style="enable-background:new 0 0 48 48;" version="1.1" viewBox="0 0 48 48" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Icons"><g><path d="M24.63685,32.25044c0.48937,1.27253-0.16468,2.70957-1.43721,3.19894l-0.25819,0.09929    c-1.27253,0.48937-2.72092-0.13914-3.21029-1.41167" style="fill:#fff;"/><path d="M30.6299,22.43c0.48,1.26,1.35644,2.2834,2.57644,3.1134l0.03335,0.0115    c0.2667,0.08797,0.49934,0.25254,0.7022,0.44973c0.15179,0.1745,0.28513,0.35609,0.37733,0.59584    c0.35462,0.92212-0.11074,1.96905-1.03286,2.32366l-0.14754,0.05674l-15.19658,5.84407l-0.18443,0.07092    c-0.92212,0.35462-1.96905-0.11074-2.32366-1.03286c-0.21277-0.55328-0.12053-1.13916,0.17172-1.59027l0,0    c0.34-1.42,0.29402-2.75274-0.17597-3.99274l-0.00029-0.00211l-1.32386-3.45786c-1.36338-3.53689-0.07904-7.44921,2.9046-9.56344    l-0.00638,0.0083l-0.11348-0.29508c-0.39008-1.01433,0.12068-2.1634,1.13501-2.55348    c1.01433-0.39008,2.1634,0.12068,2.55348,1.13501l0.11348,0.29508l-0.0069,0.00726c1.5017-0.21735,2.98363,0.03952,4.3075,0.63229    c1.91664,0.84964,3.49737,2.39086,4.3075,4.50509l1.32386,3.4381" style="fill:#fff;"/><path d="    M15.88954,22.43296c0.0064,0.38461,0.04606,0.77179,0.12069,1.15766" style="fill:none;stroke:#fff;stroke-width:0.7;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"/><path d="    M18.75451,16.79278c-0.4976,0.35261-0.93833,0.76539-1.31581,1.22376c-0.6281,0.76268-1.08109,1.65156-1.32965,2.59939" style="fill:none;stroke:#fff;stroke-width:0.7;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"/><line style="fill:none;stroke:#fff;stroke-width:0.7;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="33.13881" x2="17.94224" y1="28.98088" y2="34.82495"/><path d="    M30.6299,22.43c0.48,1.26,1.35644,2.2834,2.57644,3.1134l0.03335,0.0115c0.2667,0.08797,0.49934,0.25254,0.7022,0.44973    c0.15179,0.1745,0.28513,0.35609,0.37733,0.59584c0.35462,0.92212-0.11074,1.96905-1.03286,2.32366l-0.14754,0.05674    l-15.19658,5.84407l-0.18443,0.07092c-0.92212,0.35462-1.96905-0.11074-2.32366-1.03286    c-0.21277-0.55328-0.03764-1.01042,0.17172-1.59027l0,0c0.34-1.42,0.29402-2.75274-0.17597-3.99274l-0.00029-0.00211    l-1.32386-3.45786c-1.36338-3.53689-0.07904-7.44921,2.9046-9.56344l-0.00638,0.0083l-0.11348-0.29508    c-0.39008-1.01433,0.12068-2.1634,1.13501-2.55348c1.01433-0.39008,2.1634,0.12068,2.55348,1.13501l0.11348,0.29508    l-0.0069,0.00726c1.5017-0.21735,2.98363,0.03952,4.3075,0.63229c1.91664,0.84964,3.49737,2.39086,4.3075,4.50509l1.32386,3.4381" style="fill:none;stroke:#fff;stroke-width:0.7;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"/><path d="    M24.63685,32.25044c0.48937,1.27253-0.16468,2.70957-1.43721,3.19894l-0.25819,0.09929    c-1.27253,0.48937-2.72092-0.13914-3.21029-1.41167" style="fill:none;stroke:#fff;stroke-width:0.7;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"/></g></g></svg>'
	}
})
Icon.register({
	'sidebar': {
		width: 64,
		height: 64,
		raw: '<?xml version="1.0" encoding="iso-8859-1"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 469.333 469.333" style="enable-background:new 0 0 469.333 469.333;" xml:space="preserve" width="64px" height="64px"><g><g><path d="M458.667,0h-448C4.771,0,0,4.771,0,10.667v448c0,5.896,4.771,10.667,10.667,10.667h448    c5.896,0,10.667-4.771,10.667-10.667v-448C469.333,4.771,464.563,0,458.667,0z M149.333,448h-128V21.333h128V448z M448,448    H170.667V21.333H448V448z" fill="#FFFFFF"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'
	}
})
Icon.register({
	'caret': {
		width: 64,
		height: 64,
		raw: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M147.9,2426.7c-42.1-45.9-57.3-103.2-42.1-152.9c11.5-42.1,1162.2-1081.9,2550-2312.9c1888.6-1670.6,2553.8-2240.3,2622.6-2240.3c72.7,0,588.8,493.2,2335.9,2225c1231,1223.4,2255.6,2263.2,2274.7,2309.1c45.8,107-57.3,244.7-183.5,244.7c-49.7,0-470.2-386.1-1227.2-1135.4C7847.4,737,6864.9-237.9,6295.3-803.7L5259.2-1828.3L2816.3,335.6C1214.5,1753.9,346.6,2499.4,293.1,2499.4C251.1,2499.4,182.3,2465,147.9,2426.7z"/></g></g></svg>'
	}
})



Vue.component('icon', Icon)
Vue.use(BootstrapVue);


Vue.config.productionTip = false

new Vue({
	store,
	components: {
		Icon
	},
	render: h => h(App)
}).$mount('#app')