import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  import React from "react";
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );
 const RandomValue = ()=>{
      let arr = [];
      for(let i = 0; i<5; i++){
        let num = Math.floor(Math.random() * (40 - 0) + 0)
          arr.push(num)
      }
      return arr;
 }
  export default function MainChart() {
    const[data,setdata] = React.useState({
        labels:['Nov1', 'Nov4', 'Nov8', 'Nov12', 'Nov16'],
        datasets: [
          {
            label: '',
            data: RandomValue(),
            backgroundColor: 'rgb(181, 210, 247)',
            tension:0.6,
            showLine:true,
            borderColor:'blue',
            pointBackgroundColor:"blue",
            pointBorderColor:"white",
            pointRadius:5,
            fill:true,
          }
        ],
      });
      const [options,setoptions] = React.useState({
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart',
          },
        },
      })
    return <div className='chart'>
      <Line options={options} data={data} />
    </div>;
  }
  