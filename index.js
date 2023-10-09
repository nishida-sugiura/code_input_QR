var params = (new URL(document.location)).searchParams;
var key = params.get('key');

//let daytime2 = document.getElementById("textArea").value.trim();

$(function () {
    // 送信
    $('form').submit(function () {
  
        var s_cod = $('input[name="serialcode"]').val();
        
        var s_code = $('input[id="qr-button"]').val();
        

        



        // var date = $('input[name="date"]').val();
        // var tool = $('input[name="tool"]').val();
        
  //var breed = obj.filter(function(input) {
  //return input.name.match(/breed/);});

    
        
        
    let msg={};
        

     


       msg = ["code：" + qr] ;　 //トークに送信する内容

        
        
        sendText(String(msg)); 
      
        return false;
        
    });
}
 
 
)



 
 




