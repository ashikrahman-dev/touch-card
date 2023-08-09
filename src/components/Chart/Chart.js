import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Chart = () => {
    const [state, setState] = useState({
        series: [{
            name: 'Ad spend',
            data: [500, 603, 786, 811, 820, 550, 590, 490, 680,770,797,800]
          }, {
            name: 'Delivered cards',
            data: [700, 663, 886, 911, 860, 420, 470, 450, 580,870,697,900]
          }],
          options: {
            chart: {
              height: 350,
              type: 'area',
              toolbar: {
                show: false,
            },
            },
            colors: ['#FF4E3E', '#219FFF'],
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight',
              width: 1,
            },
            legend: {
				show: true,
                style: {
                    position:'unset',
                    top:0
                },
			},
            xaxis: {
              type: 'month',
              categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              labels:{
                style: {
                    colors: '#9B95A9',
                    fontSize: '14px',
                    fontWeight: 500,
                },
              },
            },
            yaxis: {
				tickAmount: 5,
				min: -0,
				max: 1000,
				labels: {
					style: {
						colors: '#9B95A9',
						fontSize: '14px',
						fontWeight: 500,
					},
				},
			},
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
            fill: {
				type: "gradient",
				gradient: {
					shadeIntensity: 1,
					opacityFrom: 0.4,
					opacityTo: 0,
					stops: [0, 90, 100]
				}
			},
			grid: {
				borderColor: '#E3DFE7',
				strokeDashArray: 1,
				show: true,
				padding: {
					left: 20,
					right: 20,
					top: 0,
					bottom: 0
				}
			},
          },
    })
    return (
        <div>
            <ReactApexChart options={state.options} series={state.series} type="area" height={350} />
        </div>
    );
};

export default Chart;