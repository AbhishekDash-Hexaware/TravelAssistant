var natural = require('natural');
var station_knowledge=require("../knowledge/station_code");
module.exports = {
	conversationNorm: function (station_name) {
    console.log("Input : "+station_name);
    station_name=station_name.toUpperCase()
		var all_station_names = station_knowledge.data.entries;
    var matched_stations=[];

    all_station_names.forEach(function(element){
      if(natural.JaroWinklerDistance(element.synonyms[0], station_name)>=0.85){
      //console.log(natural.JaroWinklerDistance(element.synonyms[0], station_name),element.synonyms[0],station_name);
      matched_stations.push({
        "content_type":"text",
        "title":element.synonyms[0],
        "payload":element.synonyms[0]
      })
      // matched_stations.push(element.synonyms[0])
    }
    })
    return(matched_stations);
	}
}
