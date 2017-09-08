var text = 'hello world i am a extreme bot';

text=text.replace(/\b[a-z]/g,function(f){return f.toUpperCase();});
console.log(text);
