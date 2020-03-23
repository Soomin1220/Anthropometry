

var totalChecked_gender;
$(document).ready(function(){
	totalChecked_gender = 0; //처음에만 0
	$('.genderBox').change(function(){    
        if($('.genderBox').is(":checked")  && $(".genderBox:checked").length>totalChecked_gender){
			var index = $(this).index()-1;
			$('.genderPercentCheckBox:eq('+index+')').removeAttr ('disabled') //체크박스 활성화	
        }
        else {
			var index = $(this).index()-1;
			$('.genderPercentCheckBox:eq('+index+')').attr('disabled','disabled'); // 체크박스 비활성화
        }
	totalChecked_gender = $(".genderBox:checked").length;
    });
});

var totalChecked_age;
// ageList 선택시에만 체크박스 활성화, 체크해제시 비활성화 ,하나라도 체크되어있으면 체크된걸로 침
$(document).ready(function(){
 totalChecked_age = 0;
	$('.ageList').change(function(){    
        if($('.ageList').is(":checked")  && $(".ageList:checked").length>totalChecked_age){
			var index = $(this).index()
			$('.agePercentCheckBox:eq('+index+')').removeAttr ('disabled') //체크박스 활성화
	
        }
        else {
			var index = $(this).index()
			$('.agePercentCheckBox:eq('+index+')').attr('disabled','disabled'); // 체크박스 비활성화
	


        }
totalChecked_age = $(".ageList:checked").length;
    });
});
// Genderbox 선택시에만 체크박스 활성화, 체크해제시 비활성화 ,하나라도 체크되어있으면 체크된걸로 침


	//1) '선택' 체크 시 event
		$(function(){ $("#age_checkSelect").click(function(){ 

		if($("#ageList").css("display") == "none"){   // 나이 체크박스 show (Ex. 10대 이하, 20대 이하)
	        jQuery('#ageList').show();    
	    }
	 	if($("#agePercent").css("display") == "none"){   // 나이 '체크'박스 show
	        jQuery('#agePercent').show();  
	    } 
	    // if($("#age_type").css("display") == "block"){   // 나이 체크박스 show (Ex. 10대 이하)
	    //     jQuery('#ageList').hide();    
	    // } 
	
	   	if($("#agePercentByOwn").css("display") == "block"){   // 나이 '직접입력'박스 hide
	        jQuery('#agePercentByOwn').hide();  
	    } 
	   	if($("#ageRange").css("display") == "block"){   // 나이 '직접입력'박스 hide
	        jQuery('#ageRange').hide();  
	    } 

	    });

		});


			$(function(){ $("#age_typeSelect").click(function(){ //'직접입력' 체크 시 event
				 
//	$("input:checkbox[name='ageList']").attr("checked", false); // 체크박스 초기화 

		if($("#age_type").css("display") == "none"){   // 나이 체크박스 show (Ex. 10대 이하)
	        jQuery('#ageList').show();    
	    } 
		if($("#ageList").css("display") == "block"){   // 나이 체크박스 show (Ex. 10대 이하)
	        jQuery('#ageList').hide();    
	    } 
	 	if($("#agePercentByOwn").css("display") == "none"){   // 나이 '직접입력'박스 show
	        jQuery('#agePercentByOwn').show();  

		if($("#agePercent").css("display") == "block"){    // 나이 '체크'박스 show
	        jQuery('#agePercent').hide();  
	    } 
	   	if($("#ageRange").css("display") == "none"){   // 나이 '직접입력'박스 hide
	        jQuery('#ageRange').show();  
	    } 
	    } 

	    });

		});


 $(document).ready(function() {  
 $(".agePercentCheckBox").focus(function(){
	this.select();
})
$(".genderPercentCheckBox").focus(function(){
	this.select();
})  
    $(".agePercentCheckBox").bind('blur keydown',function(e) {  
    	var checker = 0;

          if (e.type === 'blur' || e.keyCode === 13)  //focus를 벗어나거나, 사용자가 엔터를 쳤을때의 이벤트
          { 

			var strArray = this.value.split('%');
	
			var boxChecked = [];
			// 그 박스안의 내용을 %만 뗀 값을 -
			// strArray[0]에 넣고 100에서 빼서 (나머지)
			 var size = $(".agePercentCheckBox").length;
			// 박스를 다 점검해야되기때문에 size는 총 박스갯수 (agePercent_length)
			// 아래는 총 체크된 박스 갯수 (boxChecked.length), 어떤게 체크되었는지 (boxChecked)를 파악하는 과정
			for (var i = 0; i < size; i++)
			        {
			            if($(".ageList:eq("+i+")").is(":checked") == true) 
			                {
			                    boxChecked [i] = i;  
			                }
			        }
			var remainder = 100-strArray[0];

			var remainderForEach = remainder / (boxChecked.length -1);

			            for (var i = 0; i < boxChecked.length;i++)
			        {
			            if (boxChecked[i] == $(this).index())
			                continue;
			            if (boxChecked[i] != null) { // 아무것도 안 체크되어있지않은이상{}   
			            	$(".agePercentCheckBox")[i].value = remainderForEach + '%'  ;                 
			        }
			        }
	
			          		 if (strArray[0]<1==true)
	          		{
	          			checker = 1;
	          			this.value = 0 + '%';
	          			
	          			var index = $(this).index();

						$('.ageList:eq('+index+')').prop("checked", false);
						$('agePercentCheckBox:eq('+index+')').attr('disabled','true'); 
				
	          		}
						totalChecked_age = $(".ageList:checked").length;

			if (this.value.indexOf('%')==-1 && (checker == 0))
				this.value += '%';
			
			this.blur();
        }})});


