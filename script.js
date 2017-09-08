var train_cls=[ { code_data: [ 'SL', '2A', '3A', '1A' ] },
{ code_data: [ 'SL', '2A', '3A' ] },
{ code_data: [ 'SL', '2A', '3A' ] },
{ code_data: [] } ];
console.log(train_cls);

train_cls.forEach(function(element){
  if(element.code_data.length==0){
    console.log("No Data found at "+JSON.stringify(element));
    //delete element.code_data;
  }

})
delete train_cls[3];
console.log(train_cls);
