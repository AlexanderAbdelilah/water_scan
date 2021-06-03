import React from 'react';
import {
    XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines, AreaSeries
} from 'react-vis';

export default class ReactVis extends React.Component {

    constructor() {
        super();

        this.state = {
            //piezoniveau: [],
            //piezodate: [],
            piezo: []
        };

        this.fetchPiezo = this.fetchPiezo.bind(this);
        //this.getPiezo = this.getPiezo.bind(this);
        //this.getPiezoniveau = this.getPiezoniveau.bind(this);
        //this.getPiezodate = this.getPiezodate.bind(this);
    };

    render(){

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

    const d = [];

    for (let i = 0; i < 5; i++) {
        d.push({x: piezo[i].piezodate, y:piezo[i].piezoniveau});
    };
    
    return (

        
        <XYPlot
        width={300}
        height={300}>
        <HorizontalGridLines />
        <LineSeries
            color="red"
            //datacontent = 
            //{this.state.piezo.map(p => (
                
            //    {x:{p.piezodate}, y :{p.piezoniveau}}
            
            //))}
            data={
                d
                //{x: 2, y: 4},
                //{x: 3, y: 5}

            }/>
        <XAxis title="X" />
        <YAxis />
        </XYPlot>
        
    );
    
}

    componentDidMount(){
        this.fetchPiezo();
    }

    //fetch first set of 10 subsidiaries
    fetchPiezo() {
        fetch(`http://localhost:8000/api/piezo`).then(response => response.json()).then(response => {
        console.log(response.piezo);
        this.setState({
            piezo: response.piezo,
        })
        console.log(this.state.piezo);
        });
    };

    

};
