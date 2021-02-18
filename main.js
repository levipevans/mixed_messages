const jokeStart = ["hi ","hello ","howdy "];
const jokeMid = ["neighbor ","partner ","friend "];
const jokeEnd = ["how are you?","hows it going?","whats up?"];

const jokeStash =[jokeStart,jokeMid, jokeEnd];

const randomMess = (stash) =>{
    let randomMessage = "";
    for(i in stash){
        let rand =Math.floor( Math.random() * stash[i].length);
        console.log(rand);
        randomMessage += stash[i][rand];
    }
    return randomMessage;
}
console.log(randomMess(jokeStash));
