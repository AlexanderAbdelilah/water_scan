const config = {
    type: 'line',
    data,
    options: {}
};

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

fetch(`http://localhost:8000/api/piezo`).then(response => response.json()).then(response => {
                //to check wether the data is properly fetched :
                console.log(response);
                this.setState({
                    piezo: response.piezo,
                })
                
            });

const data = {
labels: labels,
datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: 
        [piezo],
    
}]
};

console.log('HELLOOOOOO');

var myChart = new Chart(
    document.getElementById('myChart'),
    config
);