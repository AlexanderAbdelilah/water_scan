import React from 'react';
import '/assets/styles/app.css';
import ReactVis from "/Applications/MAMP/htdocs/water_scan/assets/JS/components/ReactVis.jsx";

//import * as am4charts from "@amcharts/amcharts4/charts";
//import * as am4core from "@amcharts/amcharts4/core";
//import am4themes_animated from "@amcharts/amcharts4/themes/animated";
//import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";

//const data = [];

export default class Piezo extends React.Component {

    //constructor() {
    //    super();

    //    this.state = {
    //        piezo: [],
            
    //    }
    //}
    
    

    render(){
        

        return (
            <>
            {/*<Component
initialState={{ dataLoadingStatus: 'loading', chartData: [] }}
didMount={async function(component) {
    const response = 
    await fetch('http://localhost:8000/api/piezo')
            .then(res=>res.json())
            .then(res=>this.setState({chartData:{apiResponse:res}}))
    console.log(res);
  
    const niveauNappe = Object.values(res.niveau_eau_nappe)
    const dateMesure = Object.keys(res.date_mesure)
    const chartData = [['Niveau Nappe', 'Date Mesure']]
    for (let i = 0; i < dateMesure.length; i += 1) {
    chartData.push([dateMesure[i], niveauNappe[i]])
    }
    component.setState({
    dataLoadingStatus: 'ready',
    chartData: chartData,
    });
}}
/>
            <Component/>*/}

            <ReactVis/>
            {/*<canvas id="myChart" width="400" height="400"></canvas>*/}

            {/*<GraphAmchart/>*/}
            <p>CIAOO BUG DE MEEEEEEEEERDE !!!!</p>

            {/*<script src="https://cdn.jsdelivr.net/npm/chart.js@3.3.2/dist/chart.min.js"></script>
            <script src="/Applications/MAMP/htdocs/water_scan/assets/JS/ChartJS.js"></script>*/}
            
            </>
            
            
            //{/*ChartJS*/}
            //{/*<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

            //<script src="/Applications/MAMP/htdocs/water_scan/assets/chartJS.js"></script>*/}

            
            //{/*Anychart*/}
            //{/*<script src="https://cdn.anychart.com/releases/v8/js/anychart-base.min.js"></script>
            //<script src="https://cdn.anychart.com/releases/v8/js/anychart-ui.min.js"></script>
            //<script src="https://cdn.anychart.com/releases/v8/js/anychart-exports.min.js"></script>
            
            //<script src="/Applications/MAMP/htdocs/water_scan/assets/chart.js"></script>*/}

            

        );
        

    };

    
    
    
};


//fetchPiezoData = () => {
    //    fetch(`http://localhost:8000/api/piezo`).then(response => response.json()).then(response => {
    //        //to check wether the data is properly fetched :
    //        //console.log(response);
    //        this.setState({
    //            piezo: response.piezo,
    //        })
    //        console.log(piezo);
    //    })
        
    //    anychart.onDocumentReady(function () {
        
    //    // create data set on our data
    //    var dataSet = anychart.data.set(getData());
    
    //    // map data for the first series, take x from the zero column and value from the first column of data set
    //    var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });
    
    //    // create line chart
    //    var chart = anychart.line();
    
    //    // turn on chart animation
    //    chart.animation(true);
    
    //    // set chart padding
    //    chart.padding([10, 20, 5, 20]);
    
    //    // turn on the crosshair
    //    chart.crosshair().enabled(true).yLabel(false).yStroke(null);
    
    //    // set tooltip mode to point
    //    chart.tooltip().positionMode('point');
    
    //    // set chart title text settings
    //    chart.title(
    //        'Evolution du niveau des nappes phreatiques'
    //    );

    //    // set yAxis title
    //    chart.yAxis().title('Niveau des nappes phréatiques');
    //    chart.xAxis().labels().padding(5);
    
    //    // create first series with mapped data
    //    var firstSeries = chart.line(firstSeriesData);
    //    firstSeries.name('Niveau');
    //    firstSeries.hovered().markers().enabled(true).type('circle').size(4);
    //    firstSeries
    //        .tooltip()
    //        .position('right')
    //        .anchor('left-center')
    //        .offsetX(5)
    //        .offsetY(5);

    //    // turn the legend on
    //    chart.legend().enabled(true).fontSize(13).padding([0, 0, 10, 0]);
    
    //    // set container id for the chart
    //    chart.container('container');
    //    // initiate chart drawing
    //    chart.draw();
    //    });
    
    //    function getData() {
    //    return [
    //        piezo
    //    ];
    //    }
    //};

    