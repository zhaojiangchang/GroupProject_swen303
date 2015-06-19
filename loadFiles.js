var years_teams;
var teamInfo = new Array();

//var j = 0;
//console.log("aaa: " + years_teams.length);

//for(j = 0; j<years_teams.length; j++){

//  if(years_teams[j].year.localeCompare(year)){
//   console.log("aaaaaaa")
//   teamInfo = years.teams[j].teams
// }
// console.log("bbbbbb")

//}s
function read_data() {
	years_teams =  new Array();
	var remaining = 7;
	var years = new Array("2008","2009","2010","2011","2012","2013","2014");
	var count = 0;

	d3.csv("2008" + "_new_Table1.csv", function(data) {
		init_team_list();
		init_basic_info(data);
		team_list.sort(function(a, b) {
			return a.ranking - b.ranking
		})
		if(!--remaining) myLadderFunction();
		years_teams[count++] = new year_teams("2008");
	});

	d3.csv("2009" + "_new_Table1.csv", function(data) {
		init_team_list();
		init_basic_info(data);
		team_list.sort(function(a, b) {
			return a.ranking - b.ranking
		})
		if(!--remaining) myLadderFunction();
		years_teams[count++] = new year_teams("2009");
	});

	d3.csv("2010" + "_new_Table1.csv", function(data) {
		init_team_list();
		init_basic_info(data);
		team_list.sort(function(a, b) {
			return a.ranking - b.ranking
		})
		if(!--remaining) myLadderFunction();
		years_teams[count++] = new year_teams("2010");
	});

	d3.csv("2011" + "_new_Table1.csv", function(data) {
		init_team_list();
		init_basic_info(data);
		team_list.sort(function(a, b) {
			return a.ranking - b.ranking
		})
		if(!--remaining) myLadderFunction();
		years_teams[count++] = new year_teams("2011");
	});

	d3.csv("2012" + "_new_Table1.csv", function(data) {
		init_team_list();
		init_basic_info(data);
		team_list.sort(function(a, b) {
			return a.ranking - b.ranking
		})
		if(!--remaining) myLadderFunction();
		years_teams[count++] = new year_teams("2012");
	});

	d3.csv("2013" + "_new_Table1.csv", function(data) {
		init_team_list();
		init_basic_info(data);
		team_list.sort(function(a, b) {
			return a.ranking - b.ranking
		})
		if(!--remaining) myLadderFunction();
		years_teams[count++] = new year_teams("2013");
	});

	d3.csv("2014" + "_new_Table1.csv", function(data) {
		init_team_list();
		init_basic_info(data);
		team_list.sort(function(a, b) {
			return a.ranking - b.ranking
		})
		if(!--remaining) myLadderFunction();
		years_teams[count++] = new year_teams("2014");
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
	console.log("team page read: "+teamPageRd);
	console.log("index page read: "+indexPageRd);
	console.log("Years_teams_length:" + years_teams.length);
	if(indexPageRd){
		initial();
		ladder_table(year);
	}
	else{
		console.log("Years_teams_length:" + years_teams.length);
		team_win_info();
		drawStackedBarchart("Central Pulse");
	}
}

