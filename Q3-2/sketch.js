// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ（今回は直径）
  const radius = size / 2 // 半径=直径（size）の2分の1


  // 地面を描く
  const groundY = height * 0.8; // 地面の最上部のy座標
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY); // 地面を描画

  // BLANK[1] キャラクターの左右移動
  let moveSpeed = 0.5 // 左右に動かす時の基本的な速度を設定

  // SHIFTキーで加速
  if(keyIsDown(SHIFT)){ 
    moveSpeed = 1.5 
  }

  if(keyIsDown(LEFT_ARROW)){ vx -= moveSpeed; }
  if(keyIsDown(RIGHT_ARROW)){ vx += moveSpeed; }
  
  // BLANK[2] 重力とジャンプ
  // 重力をかける
  vy += g;

  //スペースキーを押したときにジャンプ（地面に接している場合のみ）
  // キャラクターの半径も考慮する（地面の高さー半径）
  const groundLevel = groundY - radius; // キャラクターの中心が来るべき地面の高さ
  if(keyIsDown(' '.charCodeAt(0)) && y >= groundLevel - 1)
    { // y >= groundLevel - 1（キャラクターの中心yが地面の少し上またはそれより下）で接地判定
      // つまり、キャラクターは地面に接触しているか、地面のすぐ近くにいる
      vy = -18; // より強いジャンプ力
    }

  // 早くなりすぎないように制限
  vx = constrain( vx, -10, 10 ); // 左右の最大速度を調整
  vy = constrain( vy, -25, 25 );// 縦方向の最大速度を調整

  // 位置を更新（この繰り返しでキャラが連続的に移動）
  x += vx;
  y += vy;

  // 地面との衝突判定と位置調整
  if(y >= groundLevel){
    vy = 0; // 速度をゼロにする（跳ね返りではなく停止）
    y = groundLevel; // 地面の上に固定
    // 移動キーを離した際に自然に停止するように、摩擦（減速）を適用（vxはしだいに0に近づく）
    vx *= 0.8;
  }

  // 画面の左右端との衝突判定（壁）
  // キャラクターの中心が壁と半径の長さ以下の距離にならないようにする
  if(x < radius){
    x = radius;
    vx = 0;
  }else if (x > width - radius){ // 右端の判定
    x = width - radius;
    vx = 0;
  }

  // キャラクターを描く
  fill(0);
  ellipse( x, y, size, size );
}