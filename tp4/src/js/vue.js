const Counter = {
	data(){
		return 0;
	}
}
Vue.createApp(Counter).component('news',newsComponent).mount('#news');