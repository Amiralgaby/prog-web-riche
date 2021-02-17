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