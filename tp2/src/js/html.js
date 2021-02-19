function bindButtonArticle(button){
	button.onclick = function(e){
		e.preventDefault();
		console.log("À réaliser");
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