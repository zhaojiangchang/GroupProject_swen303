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

function rank_info(year, rank){
	this.year = year;
	this.rank = rank;
}

function team_rank_info(){
	init_team_rank();
	var i = 0;
	console.log("Length: " + years_teams.length);
	for (i = 0; i < years_teams.length; i++){
		var year = years_teams[i].year;
		console.log("year:" + year);
		var index = 0;
		for (index = 0; index < years_teams[i].teams.length; index++){
			var team_name = years_teams[i].teams[index].name;
			var rank =  years_teams[i].teams[index].ranking;
			var j = 0;
			for (j = 0; j < team_rank.length; j++){
				if (team_name == team_rank[j].name){
					team_rank[j].rank_information.push(new rank_info(year, rank));
				}
			}
		}
	}
}




