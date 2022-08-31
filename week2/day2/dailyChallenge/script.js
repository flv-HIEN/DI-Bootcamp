let sentence = "The movie is not that bad, I like it";
wordNot = sentence.indexOf("not");
wordBad = sentence.indexOf("bad");
if (wordBad>wordNot){
    let notBad=sentence.slice(wordNot,wordBad+3);
    sentence = sentence.replace(notBad,"good");
    console.log(sentence)
}else{
    console.log(sentence)
}