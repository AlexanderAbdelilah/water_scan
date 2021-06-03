
anychart.onDocumentReady(function () {

// create data set on our data
var dataSet = anychart.data.set(getData());

// map data for the first series, take x from the zero column and value from the first column of data set
var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });

// create line chart
var chart = anychart.line();

// turn on chart animation
chart.animation(true);

// set chart padding
chart.padding([10, 20, 5, 20]);

// turn on the crosshair
chart.crosshair().enabled(true).yLabel(false).yStroke(null);

// set tooltip mode to point
chart.tooltip().positionMode('point');

// set chart title text settings
chart.title(
    'Evolution du niveau des nappes phreatiques'
);

// set yAxis title
chart.yAxis().title('Niveau des nappes phréatiques');
chart.xAxis().labels().padding(5);

// create first series with mapped data
var firstSeries = chart.line(firstSeriesData);
firstSeries.name('Niveau');
firstSeries.hovered().markers().enabled(true).type('circle').size(4);
firstSeries
    .tooltip()
    .position('right')
    .anchor('left-center')
    .offsetX(5)
    .offsetY(5);

// turn the legend on
chart.legend().enabled(true).fontSize(13).padding([0, 0, 10, 0]);

// set container id for the chart
chart.container('container');
// initiate chart drawing
chart.draw();
});


fetch(`http://localhost:8000/api/piezo`).then(response => response.json()).then(response => {
                //to check wether the data is properly fetched :
                console.log(response);
                this.setState({
                    piezo: response.piezo,
                })
                
            });


function getData() {
return [
    piezo
];
}

