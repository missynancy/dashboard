import { Chart as ChartJs} from 'chart.js/auto';
import {Bar, Doughnut, Line } from 'react-chartjs-2';
import performanceData from '../data/performanceData.json';

const Performance = () => {


    return (
        <>
        <Bar
        data={{
            labels: performanceData.map((data) => data.label),
            datasets: [
            {
                label: "Performance",
                data: performanceData.map((data) => data.value),
                backgroundColor: [
                    "rgba(43,63,229,0.8)",
                    "rgba(43,63,229,0.8)",
                    "rgba(43,63,229,0.8)",
                    "rgba(43,63,229,0.8)",
                    "rgba(43,63,229,0.8)",
                ],
                borderRadius:30,
            }  
            ],
        }}
        />
        </>
    )

}

export default Performance;
