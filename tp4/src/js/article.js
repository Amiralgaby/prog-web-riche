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
        let newArticle = $('<article></article>');
        let h3 = $('<h3></h3>');
        let p = $('<p></p>');
        let button = $('<button></button>');
        let news = $('#news');

        h3.html(this.title);
        p.html(this.description);
        button.html('View detail');
        this.bindButtonViewdetail(button, viewdetailClick);
        h3.addClass('title');
        newArticle.attr('id', this.id);

        newArticle.append(h3);
        newArticle.append(p);
        newArticle.append(button);
        news.append(newArticle);
    }

    checkArticleUnicity() {
        let h3s = $('.title');

        for (let i = 0; i < h3s.length; i++) {
            if ($(h3s[i]).html().toLowerCase().trim() === this.title.toLowerCase().trim()) {
                throw new Error('Erreur article deja existant');
            }  
        }
    }

    checkValue() {
        if (this.title === '') {
            throw new Error('Title vide');
        }

        if (this.description === '') {
            throw new Error('Description vide');
        }
    }

    addArticle() {  
        clearErrors();

        try {
            this.checkValue();
            this.checkArticleUnicity()
        } catch (error) {
            addError(error.message, $('#addNewsForm'));
            return false;
        }
        
        this.createArticleHtml();
        return true;
    }

    bindButtonViewdetail(button, callback){
        button.click(callback);
    }

    static getNextId(){
        let article = $('article:last');

        if(article.length == 0)
            return 1;

        return article.attr('id') + 1;
    }
}