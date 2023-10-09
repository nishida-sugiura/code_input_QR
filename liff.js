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




$('#qr-button').click(function() {

document.getElementById('qr_button').addEventListener('click', function() {
    if (liff.isInClient()) {
        liff.scanCode().then(result => {
            document.getElementById('qr').textContent = result.value;
        }).catch(err => {
            document.getElementById('qr').textContent = err.message;
        });
    }
});



	
});










