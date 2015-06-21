var choose_country = "New Zealand"
var choose_team = ""
var team_name = Array("Central Pulse",
				"Northern Mystics",
				"Waikato Bay of Plenty Magic",
				"Southern Steel",
				"Canterbury Tactix",
				"New South Wales Swifts",
				"Adelaide Thunderbirds",
				"Melbourne Vixens",
				"West Coast Fever",
		"Queensland Firebirds");
set_team_selection(1);
d3.selectAll("#country")
.on("click", function() {
	var choice = d3.select(this).attr("value")
	switch(choice){
	case "nz":
		choose_country = "New Zealand"
			set_team_selection(1)
			break;
	case "au":
		choose_country = "Australia"
			set_team_selection(6)
			break;
	}
})

function set_team_selection(index){
	while(document.getElementById("tm").firstChild)//remove old labels
		document.getElementById("tm").removeChild(document.getElementById("tm").firstChild);
	if(choose_country == "New Zealand"){
		for(; index<=5; index++){
			var newOption = document.createElement('option');
			newOption.setAttribute("id", "team"+index);
			newOption.value = index;
			newOption.innerHTML = team_name[index-1];
			newOption.onclick  = function(){
				choose_team = team_name[index-1];
			};
			document.getElementById("tm").appendChild(newOption);
		}
	}
	if(choose_country == "Australia"){
		for(; index<=10; index++){
			var newOption = document.createElement('option');
			newOption.setAttribute("id", "team"+index);
			newOption.value = index;
			newOption.innerHTML = team_name[index-1];
			newOption.onclick  = function(){
				choose_team = team_name[index-1];

			};
			document.getElementById("tm").appendChild(newOption);
		}
	}
}
