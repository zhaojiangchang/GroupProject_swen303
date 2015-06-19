

function getYear(y){
  year = y;
  trans_ladder(year);
  return false;
}


function ladder_table(year) {
  document.getElementById("chart_text").innerHTML = year+" ranking: </br>";
  var index = parseInt(year)-2008;
  ts = years_teams[index].teams;
          var rect = svg.selectAll("rect")
              .data(ts)
              .enter()
              .append("rect")
              .attr("x", 0)
              .attr("y", function(d, i) {
                  return (i+1) * 50
                })
              .attr("width", width)
              .attr("height", 50)
              .attr("fill", "#191B25")
              .on("mouseover", function(d) {
                  d3.select(this)
                  .attr("fill", function(d) {
                      if(d.ranking === 1){
                        return "#ED008C"
                      }
                      else{
                        return "#052F6B"
                      }
                    })
                })
              .on("mouseout", function () {
                   d3.select(this)
                   .attr("fill", "#191B25")
                 })


        var test_bar = svg.selectAll("text")
              .data(ts)
              .enter()
              .append("g")

            test_bar.append("text")
              .style("font-weight", "bold")
              .attr("x", 20)
              .attr("y", function(d, i) {
                  return (i+1) * 50 + 20
                })
              .text(function(d) {
                  return d.ranking
                  })
              .attr("font-size", "15")
              .attr("fill", "white")

            test_bar.append("text")
              .attr("x", width/6)
              .attr("y", function(d, i) {
                  return (i+1) * 50 + 20
                })
              .text(function(d) {
                  return d.coun
                  })
              .attr("font-size", "15")
              .attr("fill", "white")

            test_bar.append("text")
              .attr("x", width / 2 -100)
              .attr("y", function(d, i) {
                  return (i+1) * 50 + 20
                })
              .text(function(d) {
                  return d.name
                  })
              .attr("font-size", "15")
              .attr("fill", "white")
            test_bar.append("text")
              .attr("x", (width / 5)*3 +50)
              .attr("y", function(d, i) {
                  return (i+1) * 50 + 20
                })
              .text(function(d) {
                  return d.win
                  })
              .attr("font-size", "15")
              .attr("fill", "white")

            test_bar.append("text")
              .attr("x", (width / 5)*4 )
              .attr("y", function(d, i) {
                  return (i+1) * 50 + 20
                })
              .text(function(d) {
                  return d.lost
                  })
              .attr("font-size", "15")
              .attr("fill", "white")

            test_bar.append("text")
              .attr("x", width - 50)
              .attr("y", function(d, i) {
                  return (i+1) * 50 + 20
                })
              .text(function(d) {
                  return d.regular_final_score
                  })
              .attr("font-size", "15")
              .attr("fill", "white")
          }

      function trans_ladder(year){
        document.getElementById("chart_text").innerHTML = year+" ranking: </br>";
        var index = parseInt(year)-2008;
        ts = years_teams[index].teams;
          var bars = svg.selectAll("rect")
                .data(ts)

          bars.transition()
            .delay(function(d, i) {
              return i * 30
              })
            .duration(500)
            .each("start", function(){
                d3.select(this)
                  .attr("x", width)
                })
            .attr("x", 0)
            .attr("y", function(d, i) {
                return (i+1) * 50
              })
            .attr("width", width)
            .attr("height", 50)
            .attr("fill", "#191B25");

        svg.selectAll("g")
              .remove()
        var test_bar = svg.selectAll("text")
              .data(ts)
              .enter()
              .append("g")

            test_bar.append("text")
              .attr("x", 20)
              .attr("y", function(d, i) {
                  return (i+1) * 50 + 20
                })
              .text(function(d) {
                  return d.ranking
                  })
              .attr("font-size", "15")
              .attr("fill", "white")

            test_bar.append("text")
              .attr("x", width/6)
              .attr("y", function(d, i) {
                  return (i+1) * 50 + 20
                })
              .text(function(d) {
                  return d.coun
                  })
              .attr("font-size", "15")
              .attr("fill", "white")

            test_bar.append("text")
              .attr("x", width/2-100)
              .attr("y", function(d, i) {
                  return (i+1) * 50 + 20
                })
              .text(function(d) {
                  return d.name
                  })
              .attr("font-size", "15")
              .attr("fill", "white")
            test_bar.append("text")
              .attr("x", (width / 5)*3 +50)
              .attr("y", function(d, i) {
                  return (i+1) * 50 + 20
                })
              .text(function(d) {
                  return d.win
                  })
              .attr("font-size", "15")
              .attr("fill", "white")

            test_bar.append("text")
              .attr("x", (width / 5)*4 )
              .attr("y", function(d, i) {
                  return (i+1) * 50 + 20
                })
              .text(function(d) {
                  return d.lost
                  })
              .attr("font-size", "15")
              .attr("fill", "white")


            test_bar.append("text")
              .attr("x", width - 50)
              .attr("y", function(d, i) {
                  return (i+1) * 50 + 20
                })
              .text(function(d) {
                  return d.regular_final_score
                  })
              .attr("font-size", "15")
              .attr("fill", "white")
      }
      function initial(){
    	  svg_T.append("rect")
    	       .attr("x", 0)
    	       .attr("y", 0)
    	       .attr("width",width)
    	       .attr("height",50)
    	       .attr("fill","#191B25");

    	  svg_T.append("text")
    	        .style("font-weight", "bold")
    	        .attr("x", 20)
    	        .attr("y", 20)
    	        .text("Ranking")
    	        .attr("font-size", "15")
    	        .attr("fill", "white");

    	    svg_T.append("text")
    	        .style("font-weight", "bold")
    	        .attr("x", width/6)
    	        .attr("y", 20)
    	        .text("Country")
    	        .attr("font-size", "15")
    	        .attr("fill", "white");

    	  svg_T.append("text")
    	        .style("font-weight", "bold")
    	        .attr("x", width/2 - 100)
    	        .attr("y", 20)
    	        .text("Team Name")
    	        .attr("font-size", "15")
    	        .attr("fill", "white");

    	  svg_T.append("text")
    	        .style("font-weight", "bold")
    	        .attr("x", (width/5)*3 +50)
    	        .attr("y", 20)
    	        .text("Win")
    	        .attr("font-size", "15")
    	        .attr("fill", "white");

    	  svg_T.append("text")
    	        .style("font-weight", "bold")
    	        .attr("x", (width / 5)*4)
    	        .attr("y", 20)
    	        .text("Lost")
    	        .attr("font-size", "15")
    	        .attr("fill", "white");

    	  svg_T.append("text")
    	        .style("font-weight", "bold")
    	        .attr("x", width - 50)
    	        .attr("y", 20)
    	        .text("Pts")
    	        .attr("font-size", "15")
    	        .attr("fill", "white");

    	 }