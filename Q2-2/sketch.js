// チェッカー
function setup() {
  createCanvas(200, 200);
  noStroke(); // 枠線をなくす
}

function draw() {
  const w = width / 8; // マスの一辺の長さ

  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // i,j=(定数)はマス目の辺上を通る直線と考える
      let k = i + j;

      //マス目の描画
      // i+j(k)が奇数になる時に灰色を塗る
      if(k % 2 == 1){ 
        fill(150, 150, 150);
        rect(i * w, j * w, w, w);
      }
      //i+j(k)が偶数になる時に白色を塗る
      else{ 
        fill(255,255,255);
        rect(i * w, j * w, w, w);
      }

      //丸の描画
      // 丸の中心座標=マス目の中心（先ほど用いた点の座標にマス目の2分の1の長さを足す）
      const circle_x = i * w + w / 2;
      const circle_y = j * w + w / 2;
      // 円の直径をマス目の幅の80％にする
      const circle_d = w * 0.8; 
      //灰色のマスの上に丸を描く
      if(k % 2 == 1){
        if(j < 3){
          fill(255, 0, 0); // 赤色
          ellipse(circle_x, circle_y, circle_d, circle_d);
        }
      // 灰色のマスの上に黒い丸を描く
        else if(j >= 5){
          fill(0, 0, 0); // 黒色
          ellipse(circle_x, circle_y, circle_d, circle_d);
        }
      }
    }   
  }
  noLoop(); //draw()の繰り返しを止める
}