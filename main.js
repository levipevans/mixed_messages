const jokeStart = ["1","2","3"];
const jokeMid = ["4","5","6"];
const jokeEnd = ["7","8","9"];

const jokeStash =[jokeStart,jokeMid, jokeEnd];

const randomMess = (stash) =>{
    let randomMessage = "";
    for(i in stash){
        let rand =Math.floor( Math.random * stash[i].length);
        randomMessage += stash[i][rand];
    }
    return randomMessage;
}
console.log(randomMess(jokeStash));
