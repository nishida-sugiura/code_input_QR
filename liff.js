$(document).ready(function () {

    var liffId = "2001059289-X2m74PYZ";
    initializeLiff(liffId);
})

function initializeLiff(liffId) {
    liff
        .init({
            liffId: liffId
        })
        .then(() => {
          // start to use LIFF's api
          initializeApp();
        })
        .catch((err) => {
            console.log('LIFF Initialization failed ', err);
        });
}

function sendText(text) {
    // sendMessages(text);
// }

// LINEトーク画面上でメッセージ送信
// function sendMessages(text) {
    liff.sendMessages([{
        'type': 'text',
        'text': text
    }]).then(function () {  
        liff.closeWindow();
        
    }).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}




document.getElementById('scan-qr-button').addEventListener('click', () => {
  liff.scanCode()
    .then(result => {
      const qr_data = result.value;

 let msg={};
        msg = ["QR-Data" + qr_data] ;　 //トークに送信する内容
     
        sendText(String(msg)); 
    })
    .catch(error => {
      console.error('QRコードスキャンエラー:', error);
    });
});


















