//var team_name = Array("Central Pulse,New Zealand",
//		"Northern Mystics,New Zealand",
//		"Waikato Bay of Plenty Magic,New Zealand",
//		"Southern Steel,New Zealand",
//		"Canterbury Tactix,New Zealand",
//		"New South Wales Swifts,Australia",
//		"Adelaide Thunderbirds,Australia",
//		"Melbourne Vixens,Australia",
//		"West Coast Fever,Australia",
//"Queensland Firebirds,Australia");
//
//
//var team_rank = new Array();
//
//function init_team_rank() {
//	var i = 0;
//	for(i = 0; i < team_name.length; i++){
//		var name = team_name[i].slice(0, team_name_list[i].indexOf(","));
//		team_rank[i] = new team_name_rank(name);
//	}
//}
//
//function team_name_rank(name){
//	this.name = name;
//	this.rank_information = new Array();
//}
//
//function rank_info(year, rank){
//	this.year = year;
//	this.rank = rank;
//}
//
//function team_rank_info(){
//	init_team_rank();
//	var i = 0;
//	console.log("Length: " + years_teams.length);
//	for (i = 0; i < years_teams.length; i++){
//		var year = years_teams[i].year;
//		console.log("year:" + year);
//		var index = 0;
//		for (index = 0; index < years_teams[i].teams.length; index++){
//			var team_name = years_teams[i].teams[index].name;
//			var rank =  years_teams[i].teams[index].ranking;
//			var j = 0;
//			for (j = 0; j < team_rank.length; j++){
//				if (team_name == team_rank[j].name){
//					team_rank[j].rank_information.push(new rank_info(year, rank));
//				}
//			}
//		}
//	}
//}
//
//
//
//







var team_name = Array("Central Pulse,New Zealand",
		"Northern Mystics,New Zealand",
		"Waikato Bay of Plenty Magic,New Zealand",
		"Southern Steel,New Zealand",
		"Canterbury Tactix,New Zealand",
		"New South Wales Swifts,Australia",
		"Adelaide Thunderbirds,Australia",
		"Melbourne Vixens,Australia",
		"West Coast Fever,Australia",
"Queensland Firebirds,Australia");


var team_rank = new Array();

function init_team_rank() {
	var i = 0;
	for(i = 0; i < team_name.length; i++){
		var name = team_name[i].slice(0, team_name_list[i].indexOf(","));
		team_rank[i] = new team_name_rank(name);
	}
}

function team_name_rank(name){
	this.name = name;
	this.rank_information = new Array();
}

function rank_info(id, year, rank){
	this.id = id;
	this.year = year;
	this.rank = rank;
}

function team_rank_info(){
	init_team_rank();
	var i = 0;
	for (i = 0; i < years_teams.length; i++){
		var year = years_teams[i].year;
		var index = 0;
		for (index = 0; index < years_teams[i].teams.length; index++){
			var team_name = years_teams[i].teams[index].name;
			var rank =  years_teams[i].teams[index].ranking;
			var j = 0;
			for (j = 0; j < team_rank.length; j++){
				if (team_name == team_rank[j].name){
					team_rank[j].rank_information.push(new rank_info(i+1, year, rank));
				}
			}
		}
	}
}

function drawPicture(d){
  var da;
  var index = 0;
  console.log(d);
  for (index = 0; index < team_rank.length; index++){
    if (team_rank[index].name == d){
    	console.log("found");
        da = team_rank[index].rank_information;
        console.log(da);
        break;
    }
  }
  var sample_data = [];

  for(var h in da){
  	var item = da[h];

  	sample_data.push({
  		"year": item.year,
  		"rank": item.rank,
  		"id": item.id,
  	});
  }

  console.log(sample_data);

  //var sample_data = [
    //{"year": 2008, "rank": 10, "id": 0},
    //{"year": 2009, "rank": 10, "id": 1},
    //{"year": 2010, "rank": 9, "id": 2}
  //]

  // instantiate d3plus
  var visualization = d3plus.viz()
    .container("#scatter")  // container DIV to hold the visualization
    .data(sample_data)  // data to use with the visualization
    .type("scatter")    // visualization type
    .id("id")         // key for which our data is unique on
    .x("year")         // key for x-axis
    .y("rank")        // key for y-axis
    .draw()             // finally, draw the visualization!

};





