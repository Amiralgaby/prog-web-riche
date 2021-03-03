function iterate(){
	for (let i = 0; i < 5; i++) {
		logMessageWithDate(i);
		
		if (i === 0) 
			logMessageWithDate(VERT); 
		else if (i % 2 === 0) 
			logMessageWithDate(ROUGE); 
		else 
			logMessageWithDate(BLEU); 
	}
}