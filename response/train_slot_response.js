

module.exports={

  'TrainPrompts': function(request,response){
    var stationknowledge=require("../knowledge/station_code");
    console.log("Slot Response Builder");
    console.log("checking out type",typeof request.body.originalRequest.data.message.text);
    if(request.body.originalRequest.data.message.text!=null){
    console.log("User Input Slot Value : "+request.body.originalRequest.data.message.text);
  }


  }
}
