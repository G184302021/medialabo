let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);
// let genre;

// 通信を開始する処理
function sendRequest() {
	//検索キーの取得
	//genre = ;]
	genre = document.querySelector('#sendRequest');
 	genre.addEventListener('click', axios.get);

	// URL を設定
	//let url = 'https://www.nishita-lab.org/web-contents/jsons/test.json';
	let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' + genre + '.json';
	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)//エラー
		.then(finish);//共通の後処理
}

// 通信が成功した時の処理
function showResult(resp) {

	

	// サーバから送られてきたデータを出力
	// let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	// if (typeof data === 'string') {
	// 	data = JSON.parse(data);
	// }
//検索結果の表示
	
}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}



//-7/28(水)まで


// data をコンソールに出力
// console.log(data);

// data.x を出力
// console.log(data.x);
