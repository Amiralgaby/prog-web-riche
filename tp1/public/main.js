for (let i = 0; i < 5; i++)
{
	if (i==0) { logMessage(couleur_vert); }
	if (i%2 == 0)
		logMessage(couleur_rouge);
	else
		logMessage(couleur_bleu);
}

let h1 = document.querySelector('h1');
logMessage(h1);

let titleNews = document.querySelector('#titleNews');
logMessage(titleNews);

let lis_h3_id_title = document.querySelectorAll('.title');
logArray(lis_h3_id_title);


let input_text = document.querySelector('#input_text');
let input_add_news = document.getElementsByName('addNewsBtn');

input_add_news.forEach(input => onsubmit = create_news);

function create_news()
{
	if (isUniqueArticle(input_text.value))
	{
		let newArticle = document.createElement('article');
		let h3 = document.createElement('h3');
		h3.className = "title";
		h3.innerHTML = input_text.value;
		newArticle.append(h3);

		logMessage(input_text.value);

		ajouterAuNews(newArticle);
	}
	else
	{
		realiserUneErreur();
	}
	return false;
}

function isUniqueArticle(titre_article)
{
	let list_h3 = document.querySelectorAll('.title');
	let retour = true;
	list_h3.forEach(function(h3) {
		if (h3.innerHTML == titre_article) {
			retour = false;
		}
	});
	return retour;
}


function realiserUneErreur()
{
	let newErreurText = document.createElement('p');
	newErreurText.innerHTML = "[ERREUR] pas de duplication d'article"
	newErreurText.style.color = couleur_rouge;
	ajouterAuNews(newErreurText);
}

function ajouterAuNews(element)
{
	let news = document.querySelector('#news');
	news.append(element);
}

logDateEtMessage("Un message avec la date actuelle");