var choose_team = "Central Pulse"
	var choose_year = "2008"
		draw_pie()
		d3.selectAll("#year")
		.on("click", function() {
			var choice = d3.select(this).attr("value")
			switch(choice){
			case "2008":
				choose_year = 2008
				draw_pie()
				break;
			case "2009":
				choose_year = 2009
				draw_pie()
				break;
			case "2010":
				choose_year = 2010
				draw_pie()
				break;
			case "2011":
				choose_year = 2011
				draw_pie()
				break;
			case "2012":
				choose_year = 2012
				draw_pie()
				break;
			case "2013":
				choose_year = 2013
				draw_pie()
			}
		})

		d3.selectAll("#team")
		.on("click", function() {
			var choice = d3.select(this).attr("value")
			switch(choice){
			case "1":
				choose_team = "Central Pulse"
					draw_pie()
					break;
			case "2":
				choose_team = "Northern Mystics"
					draw_pie()
					break;
			case "3":
				choose_team = "Waikato Bay of Plenty Magic"
					draw_pie()
					break;
			case "4":
				choose_team = "Southern Steel"
					draw_pie()
					break;
			case "5":
				choose_team = "Canterbury Tactix"
					draw_pie()
					break;
			case "6":
				choose_team = "New South Wales Swifts"
					draw_pie()
					break
			case "7":
				choose_team = "Adelaide Thunderbirds"
					draw_pie()
					break
			case "8":
				choose_team = "Melbourne Vixens"
					draw_pie()
					break
			case "9":
				choose_team = "West Coast Fever"
					draw_pie()
					break
			case "10":
				choose_team = "Queensland Firebirds"
					draw_pie()
					break
			}
		})
		try{
			google.load("visualization", "1", {packages:["corechart"]});
			google.setOnLoadCallback(draw_pie);
		}
catch(err){
}
function draw_pie(){
	d3.csv(choose_year+ "_new_Table1.csv", function(data) {
		init_team_list()
		init_basic_info(data)


		for(var i = 0; i < team_list.length; i++){
			if(team_list[i].name == choose_team){
				break
			}
		}

		try{
			var data = google.visualization.arrayToDataTable([
			                                                  ['Win_or_Lost', "Total winning"],
			                                                  ['Win',     parseInt(team_list[i].win_rate * 100)],
			                                                  ['Lost',    parseInt((1 - team_list[i].win_rate) * 100)],
			                                                  ]);
			var data_2 = google.visualization.arrayToDataTable([
			                                                    ['Win_or_Lost', team_list[i].name + " Home winning"],
			                                                    ['Win',    parseInt(team_list[i].home.win_percentage * 100)],
			                                                    ['Lost',   parseInt((1 - team_list[i].home.win_percentage) * 100)],
			                                                    ]);
			var data_3 = google.visualization.arrayToDataTable([
			                                                    ['Win_or_Lost', team_list[i].name + " Away winning"],
			                                                    ['Win',    parseInt(team_list[i].away.win_percentage * 100)],
			                                                    ['Lost',   parseInt((1 - team_list[i].away.win_percentage) * 100)],
			                                                    ]);
		}
		catch(err){
		}
		var options = {
				title: "Total Percentage",
				slices: {
					0: {color: '#FF3399'},
					1: {color: '#0099FF'}
				},
				pieStartAngle: 100,
				animation:{ duration: 500,
					easing: 'out',
				}
		};

		var options_2 = {
				title: "Home Percentage",
				slices: {
					0: {color: '#FF3399'},
					1: {color: '#0099FF'}
				},
				pieStartAngle: 100,
				animation:{ duration: 500,
					easing: 'out',
				}
		};
		var options_3 = {
				title: "Away Percentage",
				slices: {
					0: {color: '#FF3399'},
					1: {color: '#0099FF'}
				},
				pieStartAngle: 100,
				animation:{ duration: 500,
					easing: 'out',
				}
		};
		try{
			var chart = new google.visualization.PieChart(document.getElementById('piechart'));
			chart.draw(data, options);
			var chart = new google.visualization.PieChart(document.getElementById('piechart_2'));
			chart.draw(data_2, options_2)
			var chart = new google.visualization.PieChart(document.getElementById('piechart_3'));
			chart.draw(data_3, options_3)
		}
		catch(err){
		}
	})
}