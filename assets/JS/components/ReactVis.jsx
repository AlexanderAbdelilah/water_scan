import React from 'react';
import {
    XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines, AreaSeries
} from 'react-vis';

export default class ReactVis extends React.Component {

    constructor() {
        super();

        this.state = {
            tableau: [],
        };

        this.fetchPiezo = this.fetchPiezo.bind(this);
    };

    componentDidMount(){
        this.fetchPiezo();
    }

    fetchPiezo() {
        fetch(`http://localhost:8000/api/piezo`).then(response => response.json()).then(response => {

        let result = response.piezo; 
        
        for(let i=0; i<((result.length)-1); i++){
            let x = result[i].piezovalue;
            let y = result[i].piezodate;
            this.state.tableau.push(`x: ${x}, y: ${y}`)
        };
        });
    };

    render(){

    console.log(this.state.tableau)

    return (
        <XYPlot width={300} height={300}>
        <HorizontalGridLines />
        <LineSeries
            color="red"
            data={this.state.tableau}
        />
        <XAxis title="X" />
        <YAxis />
        </XYPlot>
        
    );
    };
};