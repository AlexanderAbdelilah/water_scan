import React from 'react';

import {
    XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines, AreaSeries
} from 'react-vis';

export default function Example(props) {

    getPiezodate();
    getPiezoniveau();

    async function getPiezoniveau(){
        const api_url = 'http://localhost:8000/api/piezo';
        const response = await fetch(api_url);
        const data = await response.json();
        const piezoniveau = data['piezovalue'];
        
        console.log(data);
        console.log(piezoniveau);
        //console.log(piezomesure);
        return piezoniveau;
    }

    async function getPiezodate(){
        const api_url = 'http://localhost:8000/api/piezo';
        const response = await fetch(api_url);
        const data = await response.json();
        const piezodate = data['piezodate'];
        
        return piezodate;
        //console.log(data);
        //console.log(piezoniveau);
        //console.log(piezomesure);
    }
    
    console.log(getPiezodate());
    
    return (
        <XYPlot
        width={300}
        height={300}>
        <HorizontalGridLines />
        <LineSeries
            color="red"
            data={[
                {x: getPiezodate(), y: getPiezoniveau()},
                {x: 10, y: 2}
            ]}/>
        <XAxis title="X" />
        <YAxis />
        </XYPlot>
        
    );
    
}

{/*<XYPlot width={300} height={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <AreaSeries
            className="area-series-example"
            curve="curveNatural"
            data={[
                {x: getPiezodate(), y: getPiezoniveau()}
            ]}
        />
        </XYPlot>*/}