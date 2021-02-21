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
	e.preventDefault();
	let input_title = document.getElementsByName('titleToAdd')[0];
	let input_desc = document.querySelector('textarea');
	let art = new Article(null,input_title.value,input_desc.value);
	addArticle(art);
}

let articles = JSON.parse(ALLNEWSJSON);

let articleList = [];
articles.forEach( element => articleList.push(new Article(element.id,element.title,element.desc)) );
logArray(articleList);

articleList.forEach(article => addArticle(article));
