

module.exports={

  'TrainPrompts': function(request,response){
    var stationknowledge=require("../knowledge/station_code");
    console.log("Slot Response Builder");
    console.log("User Input Slot Value : "+request.body.originalRequest.data.message.text);

    
  }
}
