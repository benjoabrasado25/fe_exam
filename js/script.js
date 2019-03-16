function changeData(api_url, form_treshold) {
	$.ajax({
	  dataType: "json",
	  url: api_url,
	  data: {},
	  success: function(result) {
		google.charts.load('current', {'packages':['corechart']});
		google.charts.setOnLoadCallback(drawChart);

		function drawChart() {

			var population_data = [["County", "Female", "Male", "Treshold"]]

			for (var i=0; i< result.length; i++){
				population_data.push([result[i]["country"], result[i]["females"], result[i]["males"], parseInt(form_treshold)])
			}

			var data = google.visualization.arrayToDataTable(population_data);

			var options = {
				title: 'population',
				hAxis: {title: 'population',  titleTextStyle: {color: '#333'}},
				vAxis: {minValue: 0},

			};

			var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
			chart.draw(data, options);
		}	  	
	  }
	});
}
