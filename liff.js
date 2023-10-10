
$(document).ready(function () {
    var liffId = '2001059289-X2m74PYZ';
    var userId; // ユーザーIDを格納する変数

    // LIFF 初期化
    liff.init({
        liffId: liffId,
    }, function (data) {
        if (data.context.viewType === 'compact') {
            // LIFFの初期化が完了したことを確認
            console.log('LIFFの初期化が完了しました。');
            // プロフィール情報取得
            liff.getProfile()
                .then(function (userData) {
                    console.log(`liff.getProfile 完了 userId: ${userData.userId}, displayName: ${userData.displayName}`);
                    userId = userData.userId;
                    $('#name').text(userData.displayName + ' 様');
                    $('#point').text('100 ポイント');
                })
                .catch(function (err) {
                    console.log(`liff.getProfile 失敗 code: ${err.code}, detail: ${err.message}`);
                });
        } else {
            console.log('LIFFの初期化がcompactモードでないため、処理を中止します。');
        }
    }, function (err) {
        console.log(`liff.init 失敗 ${err}`);
    });

    // QRコードスキャンボタンのクリックイベント
    $('#scan-qr-button').on('click', function () {
        liff.scanCode()
            .then(function (result) {
                var scannedCode = result.value;

                // QRコードのスキャン結果をLINEのトークに送信
                liff.sendMessages([{
                    'type': 'text',
                    'text': scannedCode
                }])
                .then(function () {
                    console.log('QRコードのスキャン結果を送信しました');
                    liff.closeWindow(); // メッセージ送信後にウィンドウを閉じる
                })
                .catch(function (error) {
                    console.error('メッセージの送信エラー:', error);
                });

            })
            .catch(function (error) {
                console.error('QRコードスキャンエラー:', error);
            });
    });
});





