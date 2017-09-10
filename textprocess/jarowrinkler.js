var natural = require('natural');
var station_knowledge=require("../knowledge/station_code");
module.exports = {
	conversationNorm: function (station_name) {
		if(station_name.length<=4){
			console.log("Possible Station Code : "+station_name);
			station_name=station_name.toUpperCase()
			var all_station_names = station_knowledge.data.entries;
	    var matched_stations=[];

	    all_station_names.forEach(function(element){
	      if(natural.JaroWinklerDistance(element.synonyms[0], station_name)==1){
	      //console.log(natural.JaroWinklerDistance(element.synonyms[0], station_name),element.synonyms[0],station_name);
				console.log("Matched exact entry for "+station_name+" and "+element.synonyms[0]);
				//let payloadtitle = element.synonyms[0].toLowerCase().replace(/\b[a-z]/g,function(f){return f.toUpperCase();});


				// let payloadtext=element.synonyms[0]+" $";
	      // matched_stations.push({
	      //   "content_type":"text",
	      //   "title":payloadtitle,
	      //   "payload":payloadtext
	      // })
	      // matched_stations.push(element.synonyms[0])
	    }
			else{
				console.log("Possible Station Name : "+station_name);
				station_name=station_name.toUpperCase()
				var all_station_names = station_knowledge.data.entries;
				var matched_stations=[];

				all_station_names.forEach(function(element){
					if(natural.JaroWinklerDistance(element.synonyms[0], station_name)>=0.85){
					//console.log(natural.JaroWinklerDistance(element.synonyms[0], station_name),element.synonyms[0],station_name);
					let payloadtitle = element.synonyms[0].toLowerCase().replace(/\b[a-z]/g,function(f){return f.toUpperCase();});


					let payloadtext=element.synonyms[0]+" $";
					matched_stations.push({
						"content_type":"text",
						"title":payloadtitle,
						"payload":payloadtext
					})
					// matched_stations.push(element.synonyms[0])
				}
				})
				return(matched_stations);
			}

	    })
			console.log("Returning : "+matched_stations);
	    return(matched_stations);
		}
		else{
			  console.log("Possible Station Name : "+station_name);
				station_name=station_name.toUpperCase()
				var all_station_names = station_knowledge.data.entries;
		    var matched_stations=[];

		    all_station_names.forEach(function(element){
		      if(natural.JaroWinklerDistance(element.synonyms[0], station_name)>=0.85){
		      //console.log(natural.JaroWinklerDistance(element.synonyms[0], station_name),element.synonyms[0],station_name);
					let payloadtitle = element.synonyms[0].toLowerCase().replace(/\b[a-z]/g,function(f){return f.toUpperCase();});


					let payloadtext=element.synonyms[0]+" $";
		      matched_stations.push({
		        "content_type":"text",
		        "title":payloadtitle,
		        "payload":payloadtext
		      })
		      // matched_stations.push(element.synonyms[0])
		    }
		    })
		    return(matched_stations);
		}


	}
}
