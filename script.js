var text = 'HELLO WORLAD I AM BOTAS TRA JN CST';

text=text.toLowerCase().replace(/\b[a-z]/g,function(f){return f.toUpperCase();});
console.log(text);
