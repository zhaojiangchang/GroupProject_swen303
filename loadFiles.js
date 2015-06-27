var years_teams;
var teamInfo = new Array();
var indexPageRd = false;
var teamPageRd =false;
var countryPageRd = false;

function read_data() {
	years_teams =  new Array();
	var remaining = 7;
	var years = new Array(2008,2009,2010,2011,2012,2013,2014);
	var count = 0;

	d3.csv("2008" + "_new_Table1.csv", function(data) {
		init_team_list();
		init_basic_info(data);
		team_list.sort(function(a, b) {
			return a.ranking - b.ranking
		})
		if(!--remaining) myLadderFunction();
		years_teams[count++] = new year_teams(2008);
	});

	d3.csv("2009" + "_new_Table1.csv", function(data) {
		init_team_list();
		init_basic_info(data);
		team_list.sort(function(a, b) {
			return a.ranking - b.ranking
		})
		if(!--remaining) myLadderFunction();
		years_teams[count++] = new year_teams(2009);
	});

	d3.csv("2010" + "_new_Table1.csv", function(data) {
		init_team_list();
		init_basic_info(data);
		team_list.sort(function(a, b) {
			return a.ranking - b.ranking
		})
		if(!--remaining) myLadderFunction();
		years_teams[count++] = new year_teams(2010);
	});

	d3.csv("2011" + "_new_Table1.csv", function(data) {
		init_team_list();
		init_basic_info(data);
		team_list.sort(function(a, b) {
			return a.ranking - b.ranking
		})
		if(!--remaining) myLadderFunction();
		years_teams[count++] = new year_teams(2011);
	});

	d3.csv("2012" + "_new_Table1.csv", function(data) {
		init_team_list();
		init_basic_info(data);
		team_list.sort(function(a, b) {
			return a.ranking - b.ranking
		})
		if(!--remaining) myLadderFunction();
		years_teams[count++] = new year_teams(2012);
	});

	d3.csv("2013" + "_new_Table1.csv", function(data) {
		init_team_list();
		init_basic_info(data);
		team_list.sort(function(a, b) {
			return a.ranking - b.ranking
		})
		if(!--remaining) myLadderFunction();
		years_teams[count++] = new year_teams(2013);
	});

	d3.csv("2014" + "_new_Table1.csv", function(data) {
		init_team_list();
		init_basic_info(data);
		team_list.sort(function(a, b) {
			return a.ranking - b.ranking
		})
		if(!--remaining) myLadderFunction();
		years_teams[count++] = new year_teams(2014);
	});
}
function year_teams(year){
	//console.log(year);

	this.year = year;
	this.teams = myFunction();
	// console.log(this.teams);
	// this.getYear = function(){
	//  return ths.year
	// }
	//this.getTeam_list = function(){
	// return this.teams
	// }
	//this.getTeamByName = funcion(teamName){
	// return getByName(teamName);
	//}
	// function getByName(teamName){
	// var i = 0;
	// for(i=0; i<this.teams.lenght; i++){
	//  if(this.teams[i].name == teamName)(
	//return this.teams[i];
	// }
	// }
}

function myLadderFunction(){
	if(indexPageRd){
		initial();
		ladder_table(year);
	}
	else if(teamPageRd){
		team_rank_info();
		drawPicture("Central Pulse");
		team_win_info();
		drawStackedBarchart("Central Pulse");
	}
	else if(countryPageRd){
		country_points_info();
		drawBarchart("Central Pulse");
	}
}

