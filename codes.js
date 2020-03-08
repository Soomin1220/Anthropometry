//name이 이거인 input을 찾아서 각 대상에 대하여 attribute를 바꾸기
$("input[name=age_percent_check]").each(function(i, e){
   $(this).attr('disabled','disabled');
});

//체크박스 선택/해제 시 event

$(document).ready(function(){
    $("#checkBoxId").change(function(){
        if($("#checkBoxId").is(":checked")){
            alert("체크박스 체크했음!");
        }else{
            alert("체크박스 체크 해제!");
        }
    });
});

$('#Button').removeAttr('disabled');

$("#id") //id로 접근시
$(".class") // class로 접근
$('input[name=name]')//name으로 접근시

$('input[name=gender_percent_check]:eq(0)').index()
// eq로 접근해야함 $('input[name=gender_percent_check]')[0].removeAttr('disabled')--> 이렇게 안됨
