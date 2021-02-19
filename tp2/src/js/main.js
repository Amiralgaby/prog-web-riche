function binderLesBoutons() {
	let articleList = obtenirLesBoutonsArticle();

	for (var i = 0; i < articleList.length; i++) {
		bindButtonArticle(articleList[i]);
	}
}

binderLesBoutons();

let inputSubmit = document.getElementsByName('addNewsBtn');
inputSubmit[0].onclick = function(e)
{
	e.preventDefault(); // ne fait rien
}

let articles = JSON.parse(ALLNEWSJSON);

let articleList = [];
articles.forEach( element => articleList.push(new Article(element.id,element.title,element.desc)) );
logArray(articleList);


articleList.forEach(function(article)
{
	logMessage(article.title+" "+article.desc);
	addArticle(article.title,article.desc);
});
