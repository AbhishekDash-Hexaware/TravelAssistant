var train_cls=[ { code_data: ['SL'] },
{ code_data: [ 'SL', '2A', '3A', '1A' ] },
{ code_data: ['SL','1A'] },
{ code_data: [] } ];

for(var z=0;z<train_cls.length;z++){
  if(train_cls[z].code_data.length==0){
    console.log("Train Class Data Missing at Train_Cls index  : "+z);
    train_cls.splice(z,1);
  }
}

console.log(train_cls); // here no problem with undefined.
