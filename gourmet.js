
let b = document.querySelector('#print');
b.addEventListener('click', gourmet);
let li = document.querySelector('span#access');
let li2 = document.querySelector('span#address');
// let li3 = document.querySelector('span#budget');
// let li4 = document.querySelector('span#catch');
// let li5 = document.querySelector('span#genre');
// let li6 = document.querySelector('span#neme');
// let li7 = document.querySelector('span#open');
// let li8 = document.querySelector('span#station');
// let li9 = document.querySelector('span#sub');

function gourmet(){
  let i = document.querySelector('input[name="chose"]');
  genre = i.value;
  // genre = document.querySelector('#print');
  // genre.addEventListener('click', axios.get);

  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' + genre + '.json';
  axios.get(url)
  .then(showResult)
  .catch(showError)//エラー
  .then(finish);//共通の後処理

}
function showResult(resp){
   // サーバから送られてきたデータを出力
   let data = resp.data;

   // data が文字列型なら，オブジェクトに変換する
   if (typeof data === 'string') {
       data = JSON.parse(data);
   }

   // data をコンソールに出力
   console.log(data);

   // data.x を出力
   console.log(data.x);


  for (let n of data.results.shop){
    // li.textContent=n.access;
    // li2.textContent=n.address;
    console.log(n.access);

  }



  
}


// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}


// let i = document.querySelector('input[name="chose"]');
//   let li = document.querySelector('span#shop');
//   let li2 = document.querySelector('span#kekka');
//   li.textContent = (i.value);
//   for (let a of data.results.shop){
//     if (li===data.results.shop.genre.name){
//       li2.textContent = a.name ;
//     }else{
//       li2.textContent = 'ありません。';
//     }
//   }



  // for (let r of i) {
  //   if (r.checked) {        
  //     li.textContent =(r.value);
  //     for (let a of data.results.shop){
  //       if (li===data.results.shop.genre.name){
  //         li2.textContent = a.name ;
  //       }else{
  //         li2.textContent = 'ありません。';
  //       }
  //     }
      

  //   }
  // }


    // let p = document.querySelector('span#shop'); 
    // p.textContent = C;


//-7/28(木)まで
