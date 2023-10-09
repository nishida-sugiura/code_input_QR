var params = (new URL(document.location)).searchParams;
var key = params.get('key');

//let daytime2 = document.getElementById("textArea").value.trim();

$(function () {
    // 送信



$('#qr-button').click(function() {
	// LIFF の QR コード読み取り機能呼び出し
	liff.scanCode().then(function(result) {

 　　　　　const qr_data = result.value;
		
	});




        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
        
  //var breed = obj.filter(function(input) {
  //return input.name.match(/breed/);});

    
        
        
    let msg={};
        

     


       msg = ["QR data：" + qr_data] ;　 //トークに送信する内容

        
        
        sendText(String(msg)); 
      
        return false;
        
    });
}
 
 
)



 








