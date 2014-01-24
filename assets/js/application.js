/**
* application.js 
*/

//on window resize redraw the chart
$(window).resize(function() {			
	window.m.redraw();
});		
//stream chart
function initchart(){
	window.m = Morris.Area({
	  element: 'area-chart',
	  smooth: true,
	  eventStrokeWidth: 0,
	  goalStrokeWidth: 0,
	  lineWidth: 0,
	  pointSize: "3px",
	  grid: false,
	  fillOpacity: 0.7,
	  behaveLikeLine: true,			  
	  data: [
		{ hour: '6:00', a: 0, b: 0, c: 0 },
		{ hour: '7:00', a: 10, b: 25,c: 10 },
		{ hour: '8:00', a: 35, b: 50, c: 15 },
		{ hour: '9:00', a: 55, b: 25,c: 25 },
		{ hour: '10:00', a: 20, b: 15, c: 40},
		{ hour: '11:00', a: 35, b: 35,c: 20 },
		{ hour: '12:00', a: 55, b: 20,c: 0 }
	  ],
	  xkey: 'hour',
	  ykeys: ['a', 'b', 'c'],
	  xLabels: 'hour',
	  parseTime: false,
	  labels: ['Russia', 'USA','New Zealand'],
	  lineColors: ["#5fc818", "#31b5b4","#c6c6c6"],
	  redraw: true

	});
}