

module.exports={

  'TrainPrompts': function(request,response){
    var stationknowledge=require("../knowledge/station_code");

    var natural = require('natural');
    var spell = require('../textprocess/jarowrinkler');



    console.log("Slot Response Builder");
    //console.log(JSON.stringify(request.body));
    console.log("Current Context : ",JSON.stringify(request.body.result.contexts[0]));
    console.log("Next Context : ",JSON.stringify(request.body.result.contexts[1]));
    // if(request.body.result.parameters.destination==""&&request.body.result.parameters.source==""){
    //   //DO NOTHING!
    //   console.log("Basic Utterance Triggered, Should ask for Destination");
    // }

    //findtrainintent_dialog_params_destination
    //When Howrag
    //Execute Jaro
    //Custom Response Destination

    //findtrainintent_dialog_params_source
    //When Correctly HOWRAH
    //No Jaro, Proceed
    //Source Response Default

    //findtrainintent_dialog_params_source
    //When Chennayi
    //Execute Jaro
    //Custom Response for Source with Quick Replies

    //findtrainintent_dialog_context
    //When Correctly CHENNAI
    //No Jaro, Proceed
    //Date response Default
    if(request.body.result.fulfillment.speech=="Please tell me the Destination Station Code or the Station City name to where you will be travelling."){
      console.log("Resolved Destination Query : "+request.body.result.resolvedQuery);
      if(request.body.result.parameters.destination==""){
        console.log("Destination Prompt Asked");
          var matched  =spell.conversationNorm(request.body.result.resolvedQuery);
          console.log("Matches returned for Destination: "+matched);
          if(matched.length==0){
            console.log("Proceed with Default Destination Response");
          }
          else{
            console.log("Will build Quick Replies for Destination");
            console.log(matched);
            var facebookResponse={
                                           "speech": "",
                                           "displayText": "",
                                           "data": {
                                             "facebook": [
                                               {
                                                   "text":"These are the stations I found for your Destination. Select a specific one please.",
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
      else if(request.body.result.parameters.destination!=""){
        console.log("Destination Obtained Correctly : "+request.body.result.parameters.destination);

      }

    }

//

    else if(request.body.result.fulfillment.speech=="Kindly tell me the Source Station Code or the Station City name from where you will be travelling."){
      console.log("Resolved Source Query : "+request.body.result.resolvedQuery);
      if(request.body.result.parameters.source==""){
        console.log("Source Prompt Asked");
        var matched  =spell.conversationNorm(request.body.result.resolvedQuery);
        console.log("Matches returned for Source : "+matched);
        if(matched.length==0){
          console.log("Proceed with Default Source Response");
        }
        else{
          console.log("Will build Quick Replies for Source");
          console.log(matched);
        }
      }
      else if(request.body.result.parameters.source!=""){
        console.log("Source Obtained Correctly : "+request.body.result.parameters.source);

      }


      // if(request.body.result.parameters.destination==""){
      //       console.log("User Input Incorrect Destination Slot Value : "+request.body.result.resolvedQuery);
      //       var matched  =spell.conversationNorm(request.body.result.resolvedQuery);
      //       var facebookResponse={
      //                                "speech": "",
      //                                "displayText": "",
      //                                "data": {
      //                                  "facebook": [
      //                                    {
      //                                        "text":"These are the stations I found for your Destination. Select a specific one please.",
      //                                        "quick_replies":matched
      //                                    }
      //                                  ]
      //                                },
      //                                "contextOut": [],
      //                                "source": "DuckDuckGo"
      //                              }
      //
      //      response.send(facebookResponse);
      // }
      // else{
      //   //NOW SHOWS SOURCE PROMPT
      //   console.log("User Input Correct Destination Slot Value : "+request.body.result.parameters.destination);
      // }
    }

    else if(request.body.result.contexts[0].name=="findtrainintent_dialog_params_source"){
      if(request.body.result.parameters.destination==""){
        console.log("Destination Slot Not Fulfilled. Spelling Wrong");
        console.log("User Input Incorrect Destination Slot Value : "+request.body.result.resolvedQuery);
        var matched  =spell.conversationNorm(request.body.result.resolvedQuery);
        var facebookResponse={
                                 "speech": "",
                                 "displayText": "",
                                 "data": {
                                   "facebook": [
                                     {
                                         "text":"These are the stations I found for your Destination. Select a specific one please.",
                                         "quick_replies":matched
                                     }
                                   ]
                                 },
                                 "contextOut": [],
                                 "source": "DuckDuckGo"
                               }

       response.send(facebookResponse);
    //DO NOTHING
    }
    else{
      console.log("User Input Correct Destination Slot Value : "+request.body.result.parameters.destination);
      console.log("Bot should Respond with Source Station Prompt Now");
    }
  }





  }
}
