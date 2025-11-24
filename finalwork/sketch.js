// 最終課題を制作しよう
// アメリカの星条旗（建国当初）を描画する

// ⭐ 追加:星の回転角度を保持するグローバル変数 (初期値0)
let rotationAngle = 0;
// ⭐ 追加: マウスが押されているかを示す変数
let isMousePressed = false;

function star(cx, cy, r){
      beginShape();    // 点つなぎを始める
      for(let i = 0; i < 5; i++){
        const theta = TWO_PI * i * 2 / 5 - HALF_PI;
        const x = cx + cos(theta) * r;
        const y = cy + sin(theta) * r;
        vertex(x, y);  // 次につなぐ点を１つ増やす
      }
      endShape(CLOSE); // 点つなぎを終わる
    }

function draw() {
  createCanvas(570, 300);
  noStroke();
  background(255);

  const d = height / 13; // 縞1本の太さ
  const blue = color(0, 40, 104);
  const red = color(191, 10, 48)

  // 縞を描く
  for(let i = 0; i < 13; i++){
    // 先に色を指定
    if(i % 2 == 0){
      fill(red);
    }else{
      fill(255);
    }
    rect(0, i * d, width, d);
  }

  //青いベースを描く
  const size = d * 7;
  fill(blue);
  rect(0, 0, size, size);

  // 星を描く
  fill(255) // 星の塗りつぶし色を指定

  // ⭐ マウスが押されている間、回転角度を少しずつ増やす
    if (isMousePressed) {
      // 0.05ラジアンずつ回転させる (値は任意で調整可能)
      rotationAngle += 0.05; 
    }

  for(let i = 0; i < 13; i++){
    // ⭐ 角度計算に rotationAngle を加算！
    const theta = TWO_PI * i / 13 + rotationAngle;   // TWO_PI は円周率の2倍
    const x = size / 2 + cos(theta) * 50; // 関数 cos の戻り値を使用
    const y = size / 2 + sin(theta) * 50; // 関数 sin の戻り値を使用   
  // 星マークを描く関数を呼び出す
  star(x, y, 10); // 星マークを描く関数を呼び出す
  }
}
// ⭐ 追加: マウスが押されたときに実行される関数
function mousePressed() {
  isMousePressed = true;
}

// ⭐ 追加: マウスが離されたときに実行される関数
function mouseReleased() {
  isMousePressed = false;
}