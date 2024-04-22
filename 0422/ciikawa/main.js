//class.jsをインポートしたい
import { Chiikawa } from "./class.js";

const container = document.querySelector(".contents");
/*
//インスタンス化
const box = new Chiikawa(5, `チャリメラ/チャリメラ`, `chiikawa-005.webp`, `cE8wVmwY7VY`);

console.log(box);
*/
//複数なので配列
const chiikawaContents = [];

for (let i = 0; i < chiikawas.length; i++) {
    chiikawaContents.push(new Chiikawa(chiikawas[i].story, chiikawas[i].title, chiikawas[i].image, chiikawas[i].id));
    //メッソド呼び出し
    //console.log(chiikawaContents[i].createMarkup());

    container.insertAdjacentHTML("beforeend", chiikawaContents[i].createMarkup());

}
console.log(chiikawaContents);
