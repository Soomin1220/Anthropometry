class Cntry {
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

let cntrynew = new Cntry('cntry', 0);

cntrynew.multiChkCntry ('korea', 'add');
cntrynew.multiChkCntry ('china', 'add');
cntrynew.multiChkCntry ('japan', 'add');


cntrynew.consolelog();


