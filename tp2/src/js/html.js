function bindButtonArticle(button){
	button.onclick = function(e){
		e.preventDefault();
		//logMessage(e.srcElement.classList);
		obtenirArticleDeLaSource(e.srcElement);
		return false;
	}
}

function obtenirLesBoutonsArticle()
{
	return document.querySelectorAll('.articleButton');
}

function realiserUnParagrapheErreur()
{
	let newErreurText = document.createElement('p');
	newErreurText.innerHTML = "[ERREUR] pas de duplication d'article";
	newErreurText.style.color = ROUGE;
	newErreurText.classList.add('error');
	return newErreurText;
}

function obtenirArticleDeLaSource(source)
{
	let article;
	for (var i = 0; i < source.classList.length; i++) {
		if ( (article = document.querySelector('#'+source.classList[i])) ) { 
			console.log(article);
			}
	}
}