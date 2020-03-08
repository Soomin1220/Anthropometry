


function checkEvent ()
{
  if (document.getElementById('ageList').checked) 
  {
      document.getElementById('totalCost').value = 10;
  } else {
      calculate();
  }
}

class Age{
	constructor (){

		var size = document.getElementsByName('ageList').length
	}
	ageChk() {
		var size = document.getElementsByName('ageList').length;
		this.total_chked =0;
		var boxChecked = [];
		for (var i = 0; i < size; i++)
		{
			if(document.getElementsByName('ageList')[i].checked == true) // 체크박스가 체크되었을때, 
				{
					
					this.total_chked+=1; //total+1하고 
					
					boxChecked [i] = i; //매번 함수가 실행될때마다, 체크되어있는 위치를 새로 boxChecked라는 배열에 넣는다
					
				}
			else document.getElementsByName('agePercent')[i].value = 0 + '%'; // 체크가 안되어있으면 value에 0%를 집어넣는다 
	
		}
		for (var i = 0; i < boxChecked.length;i++)
		{
			if (boxChecked[i] != null) // 아무것도 안 체크되어있지않은이상{}
			{
			if (1/this.total_chked*100 % 1 ==0)
			document.getElementsByName('agePercent')[boxChecked[i]].value = 1/this.total_chked*100+ '%'; 
			else
			document.getElementsByName('agePercent')[boxChecked[i]].value = Math.floor(parseFloat(1/this.total_chked*100)*100)/100+ '%';
			/* for문을 돌면서 체크되어있는 
		해당 위치 (boxChecked[i])에 총값 나누기 한 퍼센트값을 넣는다 */ 
			}
			}
		
		}

}



class Gender {
	constructor (male, female){
		this.male = male;
		this.female = female;
	}
		male_chk(){
	this.male = Math.abs (this.male-1); 

	/*alert(this.male); //male 값 확인
	}*/
}
		female_chk(){
	this.female = Math.abs (this.female-1); 
	
	/*alert(this.female); //female 값 확인
	*/}
	genChk() {
		var size = document.getElementsByName('genderBox').length;
		this.total_chked =0;
		var boxChecked = [];
		for (var i = 0; i < size; i++)
		{
			if(document.getElementsByName('genderBox')[i].checked == true) 
				{
					
					this.total_chked+=1;
					boxChecked [i] = i; 
					
				}
			else document.getElementsByName('genderPercent')[i].value = 0 + '%';
	
		}
		for (var i = 0; i < boxChecked.length; i++)
		{
			if (boxChecked[i] != null)
			document.getElementsByName('genderPercent')[boxChecked[i]].value = 1/this.total_chked*100 + '%'; 
			}
		
		}

}
	

class Nationality {
	constructor (cntry, count){
		this.cntry = cntry;
		this.cntry = [];
		this.count = count;
		}

	multiChkCntry(cntryChk, cmd){

	if (cmd = 'add'){
			this.cntry [this.count] = cntryChk;
	
		// 알아보기
		this.count++;
	/*			for(var i in this.cntry) {
				console.log(this.cntry[i]);
		} 배열검사*/ 	

		}
	
	}
}

function visibility (){
	document.getElementById('age_percent_chk').class = 'unhidden';

}


let gender = new Gender(0,0);
let nationality = new Nationality('cntry',0);
let age = new Age();


