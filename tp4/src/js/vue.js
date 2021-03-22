const Counter = {
	data() {
		let articles = JSON.parse(ALLNEWSJSON);
		return {
			arts: articles
		};
	}
};

Vue.createApp(Counter).component('news',newsComponent).mount('#news');
