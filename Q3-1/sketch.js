// 心臓の鼓動のようなアニメーション
const cycle = 100; // 1周期のフレーム数
let count = 0; // 何フレーム目か
let size = 50;

function setup(){
  createCanvas(200, 200);
  count = 0;
}

function draw(){
  background(160, 192, 255); // 前回の描画を上塗りして消す
  count = (count + 1) % cycle; // cycleが100のため、count（現在のフレーム数）は0から99までを繰り返し循環
  if(keyIsPressed){
    count = (count + 2 ) % cycle;
  }
  // 周期を2で割り前半・後半に分け、前半で円が大きく、後半で円が小さくなるようにする
  if(count < cycle / 2){
    size += 1;
  }else{
    size -= 1;
  }
  ellipse(width / 2, height / 2, size);
}
