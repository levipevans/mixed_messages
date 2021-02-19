const greetingStart = ["hi ","hello ","howdy "];
const greetingMid = ["neighbor ","partner ","friend "];
const greetingEnd = ["how are you?","hows it going?","whats up?"];

const greetingStash =[greetingStart,greetingMid, greetingEnd];

const randomMess = (stash) =>{
    let randomMessage = "";
    for(i in stash){
        let rand =Math.floor( Math.random() * stash[i].length);
       // console.log(rand);
        randomMessage += stash[i][rand];
    }
    return randomMessage;
}
console.log(randomMess(greetingStash));
