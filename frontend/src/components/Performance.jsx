import { BarChart, Bar } from 'react-chartjs-2';
import performanceData from '../data/performanceData.json';

const Performance = () => {


    return (
        <>
        <div className="bar">
            <BarChart width={100} height={100}
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
        </div>
        </>
    )

}

export default Performance;
