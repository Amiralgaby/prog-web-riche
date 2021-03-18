const newsTemplate = `<article>
			              <h3 class="title">{{ article.title }}</h3>
			              <p></p>
			              <button @click="log(article.desc)">View detail</button>
		              </article>`;
const newsComponent = { 
  props: ['article'],
  template: newsTemplate,
  methods: {
    log: logMessageWithDate
  }
};