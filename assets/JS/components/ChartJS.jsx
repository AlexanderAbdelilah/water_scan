import React from 'react';
import '/assets/styles/app.css';
//import "https://cdn.jsdelivr.net/npm/chart.js@3.3.2/dist/chart.min.js";

export default class ChartJS extends React.Component {

    constructor() {
        super();

        this.state = {
            piezo: [],
        }
    }

    componentDidMount() {
        
        fetch(`http://localhost:8000/api/piezo`).then(response => response.json()).then(response => {
            //to check wether the data is properly fetched :
            console.log(response);
            this.setState({
                piezo: response.piezo.piezodate,
                piezodate: response.piezodate,
                piezovalue: response.piezovalue,
            })
        


    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: this.state.piezodate,
            datasets: [{
                label: '# of Votes',
                data: this.state.piezovalue,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });});

    //myChart.render();
    }

    render() {

        return (
            <canvas id="myChart" width="400" height="400"></canvas>
        );
    }
}