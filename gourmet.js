
let x = document.querySelector('#print');
x.addEventListener('click', gourmet);
let m=0;

let ul = document.querySelector('div#shop');
    let li;
    let a;

    let u = document.createElement('div');
   u.classList.add('kekka');


   

      let v =document.querySelector('span#nai');
      // let r = document.createElement('div');
      // r.classList.add('r');



function gourmet(){

  u.remove();
  
  

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

   
    
    let z = document.querySelector('span#genre');
    

    for (let n of data.results.shop){
      m=m+1;
      

      
    
      z.textContent = n.genre.name;

      a = document.createElement('a');
      a.textContent=n.name;;
      u.insertAdjacentElement('beforeend', a);
      

      li = document.createElement('li');
      li.textContent = "キャッチ："+n.catch;
      u.insertAdjacentElement('beforeend', li);

      li = document.createElement('li');
      li.textContent = '営業時間：'+n.open;
      u.insertAdjacentElement('beforeend', li);

      li = document.createElement('li');
      li.textContent = 'ジャンル：'+n.genre.name;
      u.insertAdjacentElement('beforeend', li);

      li = document.createElement('li');
      li.textContent = '予算：'+n.budget.name;
      u.insertAdjacentElement('beforeend', li);

      li = document.createElement('li');
      li.textContent = '住所：'+n.address;
      u.insertAdjacentElement('beforeend', li);

      li = document.createElement('li');
      li.textContent = 'アクセス：'+n.access;
      u.insertAdjacentElement('beforeend', li);

      li = document.createElement('li');
      li.textContent = '最寄り駅：'+n.station_name;
      u.insertAdjacentElement('beforeend', li);

      li = document.createElement('li');
      li.textContent = 'サブジャンル：'+n.sub_genre.name;
      u.insertAdjacentElement('beforeend', li);

      ul.insertAdjacentElement('beforeend', u);

      if (m>1){
        v.textContent =' ';
      }
    }
    if (m===0){
      
      // t = document.createElement('t');
      // t.textContent = 'ありません。';
      // r.insertAdjacentElement('beforeend', t);
      // v.insertAdjacentElement('beforeend',r);
      v.textContent = 'ありません。';
      

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




// li = document.createElement('li2');
//     li.textContent = n.access;
//     ul.insertAdjacentElement('beforeend',li);
//     // li.textContent=n.name;
//     // li1.textContent=n.access;
//     // li2.textContent=n.address;
//     // li3.textContent=n.budget.name;
//     // li4.textContent=n.name;

//     console.log(n.access);

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
