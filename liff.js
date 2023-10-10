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
      const scannedCode = result.value;

      // LINE Messaging APIにメッセージを送信する
      liff.sendMessages([
        {
          type: 'text',
          text: scannedCode // スキャン結果をメッセージに設定
        }
      ])
      .then(() => {
        console.log('メッセージが送信されました');
      })
      .catch((error) => {
        console.error('メッセージの送信エラー:', error);
      });
    })
    .catch(error => {
      console.error('QRコードスキャンエラー:', error);
    });
});


























