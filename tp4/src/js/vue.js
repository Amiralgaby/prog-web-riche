const Counter = {
	data() {
		let articles = JSON.parse(articlesJson);
		return {
			arts: articles
		};
	}
};

Vue.createApp(Counter).component('news',newsComponent).mount('#news');