class Article {
    id;
    title;
    description;

    constructor(id, title, description){
        this.id = id;
        this.title = title;
        this.description = description;
    }

    createArticleHtml() {
        let newArticle = document.createElement('article');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let button = document.createElement('button');
        let news = document.querySelector('#news');

        h3.innerHTML = this.title;
        p.innerHTML = this.description;
        button.innerHTML = 'View detail';
        this.bindButtonViewdetail(button, viewdetailClick);
        h3.classList.add('title');
        newArticle.id = this.id;

        newArticle.append(h3);
        newArticle.append(p);
        newArticle.append(button);
        news.append(newArticle);
    }

    checkArticleUnicity() {
        let h3s = document.querySelectorAll('.title');

        for (let i = 0; i < h3s.length; i++) {
            if (h3s[i].innerHTML.toLowerCase().trim() === this.title.toLowerCase().trim()) {
                addError('Erreur article deja existant', form);

                return false;
            }  
        }

        return true;
    }

    checkValue() {
        if (this.title === '') {
            let form = document.querySelector('#addNewsForm');
            addError('Title vide', form);
            return false;
        }

        if (this.description === '') {
            let form = document.querySelector('#addNewsForm');
            addError('Description vide', form);
            return false;
        }

        return true;
    }

    addArticle() {
        clearErrors();

        if (!this.checkValue()) {
            return false;
        }

        if (!this.checkArticleUnicity()) {
            return false;
        }
        
        this.createArticleHtml();
        return true;
    }

    bindButtonViewdetail(button, callback){
        button.onclick = callback;
    }
}