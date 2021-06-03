{component => {
    return component.state.dataLoadingStatus === 'ready' ? (
    <Chart
        chartType="BarChart"
        data={component.state.chartData}
        options={{
        chartArea: {
            width: '50%',
        },
        title: 'Mètres',
        }}
        rootProps={{ 'data-testid': '1' }}
    />
    ) : (
    <div>Fetching data from API</div>
    )
}}
