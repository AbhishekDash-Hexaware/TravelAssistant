var places = ["CHENGALPATTU JUNCTION","CHENGANNUR","CHENNAI CENTRAL","CHENNAI EGMORE","CHUNAR"];
var score = [0.8142857142857143,0.8866666666666667,0.88,0.8857142857142858,0.8222222222222222 ]

console.log("before sort ",score);
for(var i=0;i<places.length;i++){
  for(var j=0;j<=score.length-1;j++){
    console.log("inside loop")
    if(score[i]<score[j]){
      var temp=score[j];
      score[j]=score[i];
      score[i]=temp;
    }
  }
}
console.log(score);
