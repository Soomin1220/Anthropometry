class Country {
	constructor (cntry, count){
		this.cntry = cntry;
		this.cntry = [];
		this.count = count;
	}

	multiChkCntry(cntryChk, cmd){
	if (cmd = 'add'){
		this.cntry [this.count] = cntryChk;
		this.count++;
	}	
}
	consolelog()
	{
	
		for(var i in this.cntry) {
		console.log(this.cntry[i]);
}
	}
}
