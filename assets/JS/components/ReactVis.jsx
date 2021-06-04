import React from 'react';
//import {
//    XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines, AreaSeries
//} from 'react-vis';
import { Bar as BarChart } from 'react-chartjs';

export default class ReactVis extends React.Component {

    componentDidMount(){
        this.fetchPiezo();
    }

    //fetch first set of 10 subsidiaries
    fetchPiezo() {
        fetch(`http://localhost:8000/api/piezo`).then(response => response.json()).then(response => {
        //console.log(response.piezovalue);
        //console.log(response.piezodate);
        this.setState({
            //piezo: response.piezo,
            piezoniveau: response.piezovalue,
            piezodate: response.piezodate
        })
        });
    };

    constructor() {
        super();

        const piezoniveau = [];
        const data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
            label: "My First dataset",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1,
            data: piezoniveau,
            }]
        };
        const options = {
            scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
            }
        };

        this.state = {
            piezoniveau: [],
            piezodate: [],
            //piezo: [],
            chartData: data,
            chartOptions: options,

        };

        const d = [];

        this.fetchPiezo = this.fetchPiezo.bind(this);
        //this.getPiezo = this.getPiezo.bind(this);
        //this.getPiezoniveau = this.getPiezoniveau.bind(this);
        //this.getPiezodate = this.getPiezodate.bind(this);
        
    };

    
    render(){
        
        const { chartData, chartOptions } = this.state;
    
        return (
        <div>
            <BarChart data={chartData} options={chartOptions} width="600" height="250" />
        </div>
        )
        //const d = [];
        //for (let i = 0; i < 5; i++) {
        //    d.push({x: piezo[i].piezodate, y:piezo[i].piezoniveau});
        //};
        //console.log(d);
    //async function getPiezo(){
    //    const api_url = 'http://localhost:8000/api/piezo';
    //    const response = await fetch(api_url);
    //    const data = await response.json();
    //    this.setState({piezo: data});
        
    //    //console.log(data);
    //    //console.log(piezoniveau);
    //    //console.log(piezomesure);
    //    return this.piezo;
    //};
    
    //async function getPiezoniveau(){
    //    const api_url = 'http://localhost:8000/api/piezo';
    //    const response = await fetch(api_url);
    //    const data = await response.json();
    //    this.setState({piezoniveau: data['piezovalue']});
        
    //    //console.log(data);
    //    //console.log(piezoniveau);
    //    //console.log(piezomesure);
    //    return this.piezoniveau;
    //};

    ////const dataniveau = this.piezoniveau;
    ////console.log(piezoniveau);

    //async function getPiezodate(){
    //    const api_url = 'http://localhost:8000/api/piezo';
    //    const response = await fetch(api_url);
    //    const data = await response.json();
    //    this.setState({piezodate: data['piezodate']});
        
    //    return this.piezodate;
    //    //console.log(data);
    //    //console.log(piezoniveau);
    //    //console.log(piezomesure);
    //};
    
    //const datadate = this.piezodate;
    //console.log(piezodate);

    //console.log(getPiezodate());
    //getChart();

    //async function getChart(){
        
    //    getPiezodate();
    //    getPiezoniveau();
    //    getPiezo();

    //    console.log(piezo[0].piezodate);

    //    return <XYPlot
    //    width={300}
    //    height={300}>
    //    <HorizontalGridLines />
    //    <LineSeries
    //        color="red"
    //        data={[
    //            //for (let i=0;i<piezo.length;i++){
                
    //        ]}/>
    //    <XAxis title="X" />
    //    <YAxis />
    //    </XYPlot>
        
    //}

    
    
    

        //CHART JS LIB
        //<canvas id="myChart" width="400" height="400"></canvas>

        //REACT VIS LIB
        //<XYPlot
        //width={300}
        //height={300}>
        //<HorizontalGridLines />
        //<LineSeries
        //    color="red"
        //    //datacontent = 
        //    //{this.state.piezo.map(p => (
                
        //    //    {x:{p.piezodate}, y :{p.piezoniveau}}
            
        //    //))}
        //    data={
        //        //d
        //        {x: 2, y: 4},
        //        {x: 3, y: 5}

        //    }/>
        //<XAxis title="X" />
        //<YAxis />
        //</XYPlot>
    
}

    //componentDidMount(){
    //    this.fetchPiezo();
    //}

    ////fetch first set of 10 subsidiaries
    //fetchPiezo() {
    //    fetch(`http://localhost:8000/api/piezo`).then(response => response.json()).then(response => {
    //    console.log(response.piezo);
    //    this.setState({
    //        piezo: response.piezo,
    //        piezoniveau: response.piezovalue,
    //        piezodate: response.piezodate
    //    })
    //    });
    //};

};
