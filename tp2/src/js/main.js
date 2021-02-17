function binderLesBoutons() {
	let articleList = obtenirLesBoutonsArticle();

	for (var i = 0; i < articleList.length; i++) {
		bindButtonArticle(articleList[i]);
	}
}

binderLesBoutons();

let articles = JSON.parse(ALLNEWSJSON);

let articleList = [];
articles.forEach( element => articleList.push(new Article(element.id,element.title,element.desc)));
logArray(articleList);


articleList.forEach(function(article)
{s
	logMessage(article.title+" "+article.desc);
	addArticle(article.title,article.desc);
});
