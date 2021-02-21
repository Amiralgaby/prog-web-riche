function bindButtonArticle(button){
	button.onclick = function(e){
		e.preventDefault();
		let art = obtenirArticleDeLaSource(e.srcElement);
		if (!art) { logMessage('Une erreur est survenue : Cause = id button et article différent'); }
		let p = art.children[1]; // on prend le paragraphe correspond à la description
		logMessage(p.textContent);
		return button;
	}
}

function obtenirLesBoutonsArticle()
{
	return document.querySelectorAll('.articleButton');
}

function realiserUnParagrapheErreur()
{
	let newErreurText = document.createElement('p');
	newErreurText.innerHTML = "[ERREUR] duplication d'article  : ajout échoué";
	newErreurText.style.color = ROUGE;
	newErreurText.classList.add('error');
	return newErreurText;
}

function obtenirArticleDeLaSource(source)
{
	let article;
	for (var i = 0; i < source.classList.length; i++) {
		if ( (article = document.querySelector('#'+source.classList[i])) ) { 
			return article;
			}
	}
}