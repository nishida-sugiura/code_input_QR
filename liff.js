













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

       liff.scanCode().then(result => {
            const stringifiedResult = result.value;
            liff.sendMessages([{
                'type': 'text',
                'text': stringifiedResult
            }]).then(() => {
                liff.closeWindow();
            }).catch((error) => {
                window.alert('Error sending message: ' + error);
            });
        }).catch(err => {
            window.alert('scanCode failed!');
        });


            
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






$('#qr-button').click(function() {
	// LIFF の QR コード読み取り機能呼び出し
	liff.scanCode().then(function(result) {
		$.post(result.value, { userId: userId }, function(data) {
			alert(data.addPoint + ' ポイントを獲得しました！');
			$('#point').text(data.currentPoint + data.addPoint + ' ポイント');
		}).catch(function(err) {
			console.log(err);
		});
	});
});










