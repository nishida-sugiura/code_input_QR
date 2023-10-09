var params = (new URL(document.location)).searchParams;
var key = params.get('key');

//let daytime2 = document.getElementById("textArea").value.trim();

$(function () {
    // 送信



$('#qr-button').click(function() {


document.getElementById('qr_button').addEventListener('click', function() {
    if (liff.isInClient()) {

        liff.scanCode().then(result => {
            document.getElementById('s_code').textContent = result.value;
		
        }).catch(err => {
            document.getElementById('s_code').textContent = err.message;
        });	    
    }
});


  
        var s_code = $('input[name="serialcode"]').val();
        


        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
        
  //var breed = obj.filter(function(input) {
  //return input.name.match(/breed/);});

    
        
        
    let msg={};
        

     


       msg = ["code：" + s_code] ;　 //トークに送信する内容

        
        
        sendText(String(msg)); 
      
        return false;
        
    });
}
 
 
)



 
 









