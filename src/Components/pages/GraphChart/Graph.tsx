import React from "react";
import * as Highcharts from 'highcharts';
import LineChart from "../../_component/LineChart/index";
import Card from "@/Components/_component/Card";

const linChartOptions: Highcharts.Options = {
    title: {
        text: ''
    },
    xAxis: {
        reversed: false,
        title: {
            enabled: true,
            text: ''
        },
        labels: {
            format: '{value}'
        },
        accessibility: {
            rangeDescription: 'Range: 0 to 80 km.'
        },
        maxPadding: 0.05,
        showLastLabel: true,
        lineWidth: 0
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            format: '{value}'
        },
        accessibility: {
            rangeDescription: 'Range: -90°C to 20°C.'
        },
        showLastLabel: true,
        lineWidth: 0
    },
    legend: {
        enabled: false
    },
    series: [{
        type: 'spline',
        data: [1, 2, 3, 2, 5, 7, 8, 3, 5],
        // lineColor: 'blue',
        // color: 'green',
        marker: {
            enabled: false
        },
    }]
};

const Graph: React.FC = () => {
    return (
        <Card className="w-2/4">
            <div>
                <div>
                    <span className={`text-5xl font-medium text-stone-700`}>31</span> &nbsp;
                    <span className={`text-xl text-slate-500`}>messages</span>
                </div>
                <div>
                    <span className={`text-xl text-slate-500`}>messages</span>
                </div>
            </div>
            <LineChart options={linChartOptions} />
        </Card>
    )
};

export default Graph;