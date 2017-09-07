

module.exports={

  'TrainPrompts': function(request,response){
    var stationknowledge=require("../knowledge/station_code");

    var natural = require('natural');
    var spell = require('../textprocess/jarowrinkler');



    console.log("Slot Response Builder");
    //console.log("checking out type",JSON.stringify(request.body));
    if(request.body.result.contexts[0].name=="findtrainintent_dialog_params_destination"||request.body.result.contexts[0].name=="findtrainintent_dialog_params_source"){
    console.log("User Input Slot Value : "+request.body.originalRequest.data.message.text);
    var matched  =spell.conversationNorm(request.body.originalRequest.data.message.text);
    //console.log(matched);
    }

    var facebookResponse={
                             "speech": "",
                             "displayText": "",
                             "data": {
                               "facebook": [
                                 {
                                     "text":"These are the stations I found. Select a specific one please.",
                                     "quick_replies":matched
                                 }
                               ]
                             },
                             "contextOut": [],
                             "source": "DuckDuckGo"
                           }

   response.send(facebookResponse);



  }
}
