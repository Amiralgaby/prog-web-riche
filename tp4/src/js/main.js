iterate();

let h1 = $('h1');
logMessageWithDate(h1.html());

let titleNews = $('#titleNews');
logMessageWithDate(titleNews.html());

let titles = $('.title');
titles.each(function(){
	logMessageWithDate($(this).html())
});

let button = $('input[name="addNewsBtn"]');
bindButton(button);

let buttons = $('article button');
buttons.each(function(){
	$(this).click(viewdetailClick);
});

let tabs = $('.tab');
tabs.each(function(){
	$(this).click(switchTab);
});

let articles = JSON.parse(ALLNEWSJSON);
articles.forEach(function(element){ //on parcours un élément JSON ici donc pas besoin de conversir en JQuery
	console.log(element);

	let a = new Article(element.id, element.title, element.description);
	a.addArticle();
});
/*
$.ajax({ 
	url: "https://newsapi.org/v2/top-headlines?country=fr&apiKey=9b4e42c6404c48cab0f04cb200654d6c",
  	method: "GET",
    dataType: 'jsonp',
    cors: true,
    contentType:'application/json',
    secure: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
      },
      beforeSend: function (xhr) {
        xhr.setRequestHeader ("Authorization", "Basic " + btoa(""));
      },
      success: function (data){
        console.log(data);
      }
})
.done(function(data, textStatus, xhr) {
	if(xhr.status >= 300 && xhr.status < 400)
		console.log('Attention redirection');

	console.log(data);

	data.articles.forEach(article => function(){
		let a = new Article(Article.getNextId(), article.title, article.description);
		a.addArticle();
	});
})
.fail(function(xhr, textStatus, error) {
	console.log(xhr.status);
});
*/