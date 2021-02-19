function bindButtonArticle(button){
	button.onclick = function(e){
		e.preventDefault();

		return false;
	}
}

function obtenirLesBoutonsArticle()
{
	return document.querySelector('.articleButton');
}

function realiserUnParagrapheErreur()
{
	let newErreurText = document.createElement('p');
	newErreurText.innerHTML = "[ERREUR] pas de duplication d'article"
	newErreurText.style.color = ROUGE;
	newErreurText.classList.add('error');
	return newErreurText;
}