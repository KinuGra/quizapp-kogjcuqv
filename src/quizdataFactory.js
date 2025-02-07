/** 0以上max未満の整数をランダムに選ぶ関数 */
function randomRange(max){
    return Math.floor(Math.random() * max);
}

/** 0以上max以下の整数を重複なくlen個をランダムに選ぶ関数 */
function randomArray(max, len){
    const array = [];
    while(array.length < len){
        const r = randomRange(max);
        if(!array.includes(r)){
            array.push(r);
        }
    }
    return array;
}

const QAlist = [
    {Q: "鮪", A: "まぐろ"},
    {Q: "鰈", A: "かれい"},
    {Q: "鯛", A: "たい"},
    {Q: "鰹", A: "かつお"},
    {Q: "鯖", A: "さば"},
    {Q: "鱈", A: "たら"},
    {Q: "鮭", A: "さけ"},
    {Q: "鯵", A: "あじ"},
    {Q: "鮎", A: "あゆ"}
];

/** ランダムにquizdataを生成 */
export function getQuizdata(){
    const numberOfTaku = 5;
    const takuID = randomArray(QAlist.length, numberOfTaku); 
    const seikaiID = takuID[randomRange(numberOfTaku)];
    const taku = takuID.map(id => QAlist[id].A);
    return {
        mondai: QAlist[seikaiID].Q, 
        seikai: QAlist[seikaiID].A, 
        taku: taku
    };
}