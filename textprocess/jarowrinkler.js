var natural = require('natural');
var station_knowledge=require("../knowledge/station_code");
module.exports = {
	conversationNorm: function (station_name) {
		if(station_name.length<=3){
			console.log("Possible Station Code less than length 4 : "+station_name);
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

	    })
			console.log("Returning : "+matched_stations)
	    return(matched_stations);
		}
		else{
			  console.log("Possible Station Name : "+station_name);
				station_name=station_name.toUpperCase()
				var all_station_names = station_knowledge.data.entries;
		    var matched_stations=[];
				var confidence_score = [];
				var result =[];
		    all_station_names.forEach(function(element){
		      if(natural.JaroWinklerDistance(element.synonyms[0], station_name)>=0.80){
		      //console.log(natural.JaroWinklerDistance(element.synonyms[0], station_name),element.synonyms[0],station_name);
					console.log("Confidence Score is "+natural.JaroWinklerDistance(element.synonyms[0], station_name)+" for "+element.synonyms[0]);
					confidence_score.push(natural.JaroWinklerDistance(element.synonyms[0], station_name));
					result.push(element.synonyms[0]);
		    }
		    })
				console.log("before sorting",confidence_score);
				console.log("before sorting",result);

				for (var i=0;i<confidence_score.length-1;i++){
					for (var j=1;j<result.length;j++){
						console.log("over here before if condition",confidence_score[i],confidence_score[i+1])
						if(confidence_score[i]<confidence_score[i+1]){
							console.log("over hereafter condition",confidence_score[i],confidence_score[i+1])
							var temp = result[i+1];
							result[i+1]=result[i];
							result[i]= temp;
						}
					}
				}
				console.log("after sorting",confidence_score.sort(function(a, b){return b-a}));
				console.log("after sorting",result);


				result.forEach(function(element){

				let payloadtitle = element.toLowerCase().replace(/\b[a-z]/g,function(f){return f.toUpperCase();});
				let payloadtext=element+" $";
				matched_stations.push({
				  "content_type":"text",
				  "title":payloadtitle,
				  "payload":payloadtext
					})
				//matched_stations.push(element)
				})

		    return(matched_stations);
		}


	}
}
