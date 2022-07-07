// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;
let yoso ;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
// hantei();


// // ボタンを押した後の処理をする関数 hantei() の定義
// function hantei() {       // 第5回課題:テキストボックスの数値をここに代入
//     // 課題3-1：ここの判定処理を作成する．
//     //        ページに表示する方法はまだ習っていないので
//     //        判定結果はコンソールに出力すること

//     kaisu=kaisu+1;

//     let kaito = document.querySelector('span#answer');
//     let li;
//     li = document.createElement('li');

//         if (kaisu>4){
//             li.textContent ='答えは '+kotae+' でした．すでにゲームは終わっています';
//         }else{
//             if (4===kaisu && !(kotae === yoso)){ 
//                 li.textContent ='まちがい．残念でした答えは '+kotae+' です．';
//             }else if (kaisu<4 && kotae === yoso){
//                 li.textContent ='正解です.おめでとう!';
//             }else if(kaisu<4 &&!(kotae === yoso)) {
//                 if (kotae>yoso){
//                     li.textContent ='まちがい．答えはもっと大きいですよ';
//                 }else if (kotae<yoso){
//                     li.textContent ='まちがい．答えはもっと小さいですよ';
//                 }
//             }
//         }
//         kaito.insertAdjacentElement('beforeend', li); 

// }

let b = document.querySelector('#print');
b.addEventListener('click', greeting);

function greeting() {
    let i = document.querySelector('input[name="kaito"]');
    yoso = Number(i.value);
    
    kaisu=kaisu+1;

    let li = document.querySelector('span#answer');
    //li = document.createElement('li');

        if (kaisu>4){
            li.textContent ='答えは '+kotae+' でした．すでにゲームは終わっています';
        }else{
            if (4===kaisu && !(kotae === yoso)){ 
                li.textContent ='まちがい．残念でした答えは '+kotae+' です．';
            }else if (kaisu<4 && kotae === yoso){
                li.textContent ='正解です.おめでとう!';
                kaisu = kaisu + 4;
            }else if(kaisu<4 &&!(kotae === yoso)) {
                if (kotae>yoso){
                    li.textContent ='まちがい．答えはもっと大きいですよ';
                }else if (kotae<yoso){
                    li.textContent ='まちがい．答えはもっと小さいですよ';
                }
            }
        }
        //kaito.insertAdjacentElement('beforeend', li); 

        let p = document.querySelector('span#yoso'); 
        p.textContent = yoso;
        let q = document.querySelector('span#kaisu'); 
        q.textContent = kaisu;
}






