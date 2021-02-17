function logMessage(message)
{
	console.log(message);
}

function logArray(array_object)
{
	array_object.forEach(element => console.log(element));
}

function logDateEtMessage(message)
{
	var d = new Date(); // on récupérère la date courante
	console.log(d.getHours(),":",d.getMinutes(),message);
}