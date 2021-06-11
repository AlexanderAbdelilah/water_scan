import React from 'react';
//import ReactVis from "/Applications/MAMP/htdocs/water_scan/assets/JS/components/ReactVis.jsx";
import "/Applications/MAMP/htdocs/water_scan/assets/chartjs.js";
import '/Applications/MAMP/htdocs/water_scan/assets/styles/app.css';
import ChartJS from "/Applications/MAMP/htdocs/water_scan/assets/JS/components/ChartJS.jsx";
import Mapbox from "/Applications/MAMP/htdocs/water_scan/assets/JS/components/Mapbox.jsx";
import logo_vittel from "/Applications/MAMP/htdocs/water_scan/src/img/vittel-logo-1.svg";
import icon_chart from "/Applications/MAMP/htdocs/water_scan/src/img/Icon-Chart.svg";
import icon_world_y from "/Applications/MAMP/htdocs/water_scan/src/img/Icon-World-Y.svg";
import icon_alert_g from "/Applications/MAMP/htdocs/water_scan/src/img/Icon-Chart.svg";

//import * as am4charts from "@amcharts/amcharts4/charts";
//import * as am4core from "@amcharts/amcharts4/core";
//import am4themes_animated from "@amcharts/amcharts4/themes/animated";
//import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";

export default class Piezo extends React.Component {


    render(){
        

        return (
            <>

            <body className="container">
                            <div>
                                <div>
                                    <div className="row">
                                        <div className="col-md-4 p-0">
                                                <div className="card-text">
                                                    <img src={logo_vittel} alt="logo mondelez"/>
                                                </div>
                                        </div>
                                        <div className="col-md-8 mb-8">
                                            
                                                <div className="card-text p-3">
                                                    <p>VITTEL - RESULTATS</p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 p-0">
                                        <div className="card h-100 border-0">
                                            <div className="card-body border-dark border-right  border-bottom">
                                                <img  src={icon_chart} alt="chiffre d'affaire"/>
                                                <h4 className="card-title">Chiffre d'affaires 2020</h4>
                                                <h4 className="card-title">XXXXXX (M€)</h4>
                                            </div>
                                        </div>
                                    </div>
                                            
                                    <div className="col-md-4 p-0">
                                        <div className="card h-100 border-0">
                                            <div className="card-body border-dark border-right border-left border-bottom">
                                                {/*<GraphCAMondelez/>*/}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 p-0">
                                        <div className="card h-100 border-0">
                                            <div className="card-body border-dark border-left  border-bottom">
                                                <h4 className="card-title"></h4>
                                                <Mapbox/>
                                            </div>
                                        </div>
                                    </div>
                                <div/>
                                    <div className="col-md-4 p-0">
                                            <div className="card h-100 border-0">
                                                <div className="card-body border-dark border-top ">
                                                    <img src={icon_world_y} alt="paradis fiscaux"/>
                                                    <h4 className="card-title">Niveau de la nappe</h4>
                                                    <ChartJS/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 p-0">
                                            <div className="card h-100 border-0">
                                                <div className="card-body filiales border-dark border-right border-top ">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 p-0">
                                            <div className="card h-100 border-0">
                                                <div className="card-body border-dark border-left border-top ">
                                                    <img src={icon_alert_g} alt="sanctions"/>
                                    
                                                    <h4 className="card-title">Sanctions</h4>
                                                    <p className="card-text">AUCUNE</p>  
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </body>
            

            
            
            </>
            
            
            

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

    