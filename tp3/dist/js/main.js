iterate();

let h1 = $('h1');
logMessageWithDate(h1.html());

let titleNews = $('#titleNews');
logMessageWithDate(titleNews.html());

let titles = $('.title');
titles.each(function(index){
	logMessageWithDate($( this ).html());
});

let button = $('input[name="addNewsBtn"]');
bindButton(button);

let buttons = $('article button');
buttons.each(function(element){
	$( this ).click(viewdetailClick);
});

let articles = jQuery.parseJSON(ALLNEWSJSON);
articles.forEach(function(element){
	console.log(element);

	let a = new Article(element.id, element.title, element.description);
	a.addArticle();
});
