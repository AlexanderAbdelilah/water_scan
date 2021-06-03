import React from 'react';
import '/assets/styles/app.css';
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";

export default class GraphAmchart extends React.Component {
  
    constructor() {
        super();

        this.state = {
            piezomesure: [],
            piezoniveau: [],
            
        }
    };

    

  componentDidMount() {  
    // Apply chart themes
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_kelly);
    //this.fetchPiezoNiveau();
    //this.fetchPiezoMesure();

    
    // Create chart instance
    var chart = am4core.create("chartdivgraph", am4charts.XYChart3D);

    
    // Add data
    
    chart.data = 
    fetch(`http://localhost:8000/api/piezo`).then(response => response.json()).then(response => {
        //to check wether the data is properly fetched :
        console.log(response);
        this.setState({
            piezomesure: response.piezodate,
            piezoniveau: response.piezovalue,
        })
    });
    //[
    //    {"piezomesure": fetch(`http://localhost:8000/api/piezo`).then(response => response.json()).then(response => {
    //    //to check wether the data is properly fetched :
    //    console.log(response);
    //    this.setState({
    //        piezomesure: response.piezodate,
    //    })
    //}),
    //"piezoniveau": fetch(`http://localhost:8000/api/piezo`).then(response => response.json()).then(response => {
    //    //to check wether the data is properly fetched :
    //    console.log(response);
    //    this.setState({
    //        piezoniveau: response.piezovalue,
    //    })
    
    //})
    //}];
        //{"mesure": this.piezomesure, "niveau": this.piezoniveau
    //fetch(`http://localhost:8000/api/piezo`).then(response => response.json()).then(response => {
    //    //to check wether the data is properly fetched :
    //    //console.log(response);
    //    this.setState({
    //        piezomesure: response.piezo.date_mesure,
    //    });
    //}),
    //fetch(`http://localhost:8000/api/piezo`).then(response => response.json()).then(response => {
    //    //to check wether the data is properly fetched :
    //    //console.log(response);
    //    this.setState({
    //        piezoniveau: response.piezo.niveau_eau_nappe,
    //    });
    //}),
        
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "piezodate";

    var  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    //valueAxis.title.text = "Chiffre d'affaires (Millions d'€)";
    valueAxis.min = 0;

    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueY = "piezoniveau";
    series.dataFields.categoryX = "piezomesure";
    series.name = "NIVEAU NAPPE";
    series.tooltipText = "{name}: [bold]{valueY}mètres[/]";
    series.fill = am4core.color("#FEED00");

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    
  }
//  fetchPiezoMesure = () => {
//    fetch(`http://localhost:8000/api/piezo`).then(response => response.json()).then(response => {
//        //to check wether the data is properly fetched :
//        console.log(response);
//        this.setState({
//            piezomesure: response.piezodate,
//        })
//    })
    
//    };
//fetchPiezoNiveau = () => {
//    fetch(`http://localhost:8000/api/piezo`).then(response => response.json()).then(response => {
//        //to check wether the data is properly fetched :
//        console.log(response);
//        this.setState({
//            piezoniveau: response.piezovalue,
//        })
    
//    })
    
//    };

  

  render() {

    return (
      <div id="chartdivgraph"></div>
    );
  }

//  componentDidMount() {  
    
//    this.fetchPiezoNiveau();
//    this.fetchPiezoMesure();
//  }

  

}