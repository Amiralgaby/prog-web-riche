class Article {
	id;
	title;
	desc;

	constructor(id,titre,description)
	{
		this.id = id;
		this.title = titre;
		this.desc = description;
	}
}

function createArticle(title,description) {
	let article = new Article("articleUnique",title,description);
    let newArticle = document.createElement('article');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let button = document.createElement('button');
    let news = document.querySelector('#news');
    h3.innerHTML = title;
    p.innerHTML = description;
    button.innerHTML = "View detail";
    h3.classList.add('title');
    button.classList.add('articleButton');
    newArticle.append(h3);
    newArticle.append(p);
    newArticle.append(button);
    news.append(newArticle);
    return article;
}

function checkArticleUnicity(title) {
    let h3s = document.querySelectorAll('.title');

    for (let i = 0; i < h3s.length; i++) {
        if (h3s[i].innerHTML.toLowerCase().trim() === title.toLowerCase().trim()) {
            
            let form = document.querySelector('#addNewsForm');
            form.prepend(realiserUnParagrapheErreur());

            return false;
        }
    }

    return true;
}

function addArticle(title,description) {
    let errors = document.querySelectorAll('.error');
    if(errors){
        for (var i = 0; i < errors.length; i++) {
            if(!errors[0].parentNode)
                break;
            errors[0].parentNode.removeChild(errors[0]);
            console.log("KILLED");
        }      
    }

    if (!checkArticleUnicity(title)) {
        return;
    }
    
    createArticle(title,description);
}