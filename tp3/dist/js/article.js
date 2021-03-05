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

        h3.html(this.title).addClass('title');
        p.html(this.description);
        button.html('View detail');
        this.bindButtonViewdetail(button, viewdetailClick);
        newArticle.id = this.id;

        newArticle.append(h3);
        newArticle.append(p);
        newArticle.append(button);
        news.append(newArticle);
    }

    checkArticleUnicity() {
        let h3s = $('.title');

        let this_title = this.title.toLowerCase().trim();

        let retval = true;
        
        h3s.each(function(index){
            if ($( this ).html().toLowerCase().trim() === this_title)
            {
                let form = $('#addNewsForm');
                addError('Erreur article déjà existant', form);
                return retval = false;
            }
        });

        return retval;
    }

    checkValue() {
        if (this.title === '') {
            let form = $('#addNewsForm');
            addError('Title vide', form);
            return false;
        }

        if (this.description === '') {
            let form = $('#addNewsForm');
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
        button.click(callback);
    }
}