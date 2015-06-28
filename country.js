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
set_team_selection();
function set_team_selection(){
	console.log(11)
	while(document.getElementById("tm").firstChild)//remove old labels
		document.getElementById("tm").removeChild(document.getElementById("tm").firstChild);
	var index = 0;
	for(; index<team_name.length; index++){
		var newOption = document.createElement('option');
		newOption.setAttribute("id", "team"+index);
		newOption.value = index;
		newOption.innerHTML = team_name[index];
		document.getElementById("tm").appendChild(newOption);
	}
}
var select = document.getElementById("tm");
select.onchange = function(){
	var name =this.options[this.selectedIndex].text.slice(0, this.options[this.selectedIndex].text.indexOf(","));
	drawBarchart(name);
	};


var country_points = new Array();

function init_country_points() {
	var i = 0;
	for(i = 0; i < team_name.length; i++){
		var name = team_name[i].slice(0, team_name_list[i].indexOf(","));
		var country = team_name[i].slice(team_name_list[i].indexOf(",")+1);
		country_points[i] = new team_points(name, country);
	}
}

function team_points(name, country){
	this.name = name;
	this.country = country;
	this.team_information = new Array();
}

function match_info(year, match_vs_rival){
	this.year = year;
	this.match_vs_rival = match_vs_rival;
}

function country_points_info(){

	init_country_points();
	var i = 0;
	for (i = 0; i < years_teams.length; i++){
		var year = years_teams[i].year;
		var index = 0;
		for (index = 0; index < years_teams[i].teams.length; index++){
			var team_name = years_teams[i].teams[index].name;
			var  home_results_array=  years_teams[i].teams[index].home.result;
			var  away_results_array=  years_teams[i].teams[index].away.result;
			var home_vs_rival = checkTeams(years_teams[i].teams[index].coun,home_results_array)
			var away_vs_rival = checkTeams(years_teams[i].teams[index].coun,away_results_array)
			var match_vs_rival = [];
			var m = 0;
			var n = 0;
			for(; m< home_vs_rival.length; m++){
				match_vs_rival[n++] = home_vs_rival[m];
			}
			m = 0;
			for(; m<away_vs_rival.length; m++){
				match_vs_rival[n++] = away_vs_rival[m];
			}
			var j = 0;
			for (j = 0; j < country_points.length; j++){
				if (team_name == country_points[j].name){
					country_points[j].team_information.push(new match_info(year, match_vs_rival));
				}
			}
		}
	}
}

function checkTeams(coun, results_teams){
	var teams = [];
	var i = 0;
	var j = 0;
	for(; i< results_teams.length; i++){
		if(coun!==check_country(results_teams[i].rival_name) && parseInt(results_teams[i].round)<15){
			teams[j++] = results_teams[i];
		}
	}
	return teams;

}
function check_country(t_name){
	var i = 0;
	for(; i<team_name.length; i++){
		var name = team_name[i].slice(0, team_name[i].indexOf(","));
		if(t_name==name){
			return team_name[i].slice(team_name[i].indexOf(",")+1);
		}
	}
}
function drawBarchart(d){
	document.getElementById("title").innerHTML = d +" vs "+ check_country(d) + " teams";
	var da;
	var index = 0;
	console.log(d);
	for (index = 0; index < country_points.length; index++){
		if (country_points[index].name == d){
			da = country_points[index].team_information;
			break;
		}
	}
	var sample_data = [];
	for(var h in da){
		var item = da[h];
		var idx = 0;
		for(; idx<item.match_vs_rival.length; idx++){
			var percentage = item.match_vs_rival[idx].this_score/item.match_vs_rival[idx].rival_score;
			sample_data.push({
				"year": item.year,
				"name": item.match_vs_rival[idx].rival_name,
				"lost_or_win": item.match_vs_rival[idx].lost_or_win,
				"My score : Rival score (%)": percentage,
			});
		}

	}
	var visualization = d3plus.viz()
	.container("#viz")
	.data(sample_data)
	.type("bar")
	.id("name")
	.x("year")
	.y("My score : Rival score (%)")
	.draw()

};

