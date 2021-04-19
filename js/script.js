window.onload = function(){

  //圖片
  var mainPic = document.getElementById('i1');
  //按鈕
  var picBtn = document.getElementsByTagName('img');
  //數字
  //圖片數量(變數)
  var N = 1;


 mainPic.src = 'img/work' + N + '.jpg';


  mainPic.onclick = function (){

console.log(N);
    if(N == 1){
      N += 1;
      mainPic.src = 'img/work' + N + '.jpg';
    }
    else if(N == 2){
      N += 1;
      mainPic.src = 'img/work' + N + '.png';
    }
    else if(N == 3){
      N += 1;
      mainPic.src = 'img/work' + N + '.png';
    }
    else if(N == 4){
      N += 1;
      mainPic.src = 'img/work' + N + '.png';
    }
    else if(N == 5){
      N = 1;
      mainPic.src = 'img/work' + N + '.jpg';
    }

    //取消 <a> 連結點擊後，在網址最後的 # 字號
    return false;

  }

}