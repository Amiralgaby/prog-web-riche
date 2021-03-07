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

var today = new Date();
var dd = String(today.getDate()).padStart(2,'0');
var mm = String(today.getMonth() + 1).padStart(2,'0');
var yyyy = today.getFullYear();

today = yyyy + '-' + dd + '-' +mm;
today = '2021-03-03';
console.log(today);

$.ajax({
    url: 'http://newsapi.org/v2/everything?q=minecraft&from='+ today +'&sortBy=publishedAt&apiKey=9b4e42c6404c48cab0f04cb200654d6c&pageSize=5',
    type: 'GET',
    dataType: 'jsonp',
	cors: true ,
	contentType:'application/json',
	secure: true,
	headers: {
    	'Access-Control-Allow-Origin': '*',
	},
	beforeSend: function (xhr) {
   		xhr.setRequestHeader ("Authorization", "Basic " + btoa(""));	
	}
}).done(function (data){
	console.log(true);
	console.log(data);

	data.each(function(index,element){
		let article = new Article(0, element.title.val(), element.desc.val());
		article.addArticle();
	});
}).fail(function (data){
	console.log(false);
	console.log("l'appel ajax n'a pas fonctionné");
});

let onglets = $('.onglet');

$(onglets[0]).click(function() {
	$('form').hide().siblings(':not(form)').show();
}).focus(function() {
	$( this ).css('color',ROUGE);
	$( onglets[1] ).css('color','#000000');
});

$(onglets[1]).click(function() {
	$('form').show().siblings(':not(form)').hide();
	$('table').show();
}).focus(function() {
	$( this ).css('color',ROUGE);
	$( onglets[0] ).css('color','#000000');
});

$(onglets[0]).click().focus();