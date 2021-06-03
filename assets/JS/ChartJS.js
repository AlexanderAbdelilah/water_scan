const piezomesure = [];
const piezoniveau = [];

async function getdata() {
    
    fetch(`http://localhost:8000/api/piezo`).then(response => response.json()).then(response => {
    //to check wether the data is properly fetched :
    //console.log(response);
    this.setState({
        piezomesure: response.piezodate,
        piezoniveau: response.piezovalue,
    });});
    //console.log(piezomesure);
    return {piezomesure, piezoniveau};
    
    }

//const api_url = 'http://localhost:8000/api/piezo';

//async function getPiezo(){

//    const response = await fetch(api_url);
//    const data = await response.json();
//    console.log(data);
//}

    ChartJS();
    getdata();
    //getPiezo();

export default async function ChartJS (){
    const data = await getData();
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.piezomesure,
                datasets: [{
                    label: '# of Votes',
                    data: data.piezoniveau,
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
        });
        
    }



    
