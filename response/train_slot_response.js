

module.exports={

  'TrainPrompts': function(request,response){
    var stationknowledge=require("../knowledge/station_code");
    console.log("Slot Response Builder");
    console.log("checking out type",JSON.stringify(request.body));
    if(request.body.originalRequest.data.message.text!=undefined||request.body.originalRequest.data.postback.payload!=find_train){
    console.log("User Input Slot Value : "+request.body.originalRequest.data.message.text);
    }
    


  }
}
