function bindButton(button){
    button.click(function(element){
        element.preventDefault();
        let title = $('input[name="titleToAdd"]');
        let desc = $('textarea[name="descriptionToAdd"]');

        let article = new Article(0, title.val(), desc.val());
        if (article.addArticle()) {
            $( title ).val('');
            $( desc ).val('');
        }
        return false;
    });
}

function clearErrors(){
	$('.error').remove();
}

function addError(message, parent){
	let error = $('<p></p>')
    error.html( message ).css('color',ROUGE).addClass('error');

    $( parent ).prepend(error);
}

function viewdetailClick(){
    let p = $( this ).parent().children();

    logMessageWithDate($( p[1] ).html());
}