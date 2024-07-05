import { useState, useMemo } from 'react';
import Image from "next/image";
import { ASSETS } from "@/assets";
import Select from "../../views/select";
import TextField from "../../views/Textfield";
import LineChart from '../../_component/LineChart'

const linChartOptions = {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: ''
    },
    legend: {
        enabled: false  // Disable the legend
    },
    xAxis: {
        reversed: false,
        categories: ['29.04-05.05','6.05-12.05','13.05-19.05','20.05-26.05', '27.05-02.06', '03.06-09.06', '10.06-16.06', '17.06-23.06', '24.06-30.06', '01.07-07.07','08.07-14.07'],
        tickPositions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        title: {
            enabled: false,
            text: ''
        },
        maxPadding: 7,
        showLastLabel: true,
        lineWidth: 0,
        tickmarkPlacement: false, // Ensures the tick marks align with categories
    },
    yAxis: {
        tickPositions: [0, 10, 20, 30, 40, 50, 60],
        title: {
            text: ''
        }
    },
    plotOptions: {
        areaspline: {
            marker: {
                enabled: false,
                states: {
                    hover: {
                        enabled: false
                    }
                }
            }
        }
    },
    series: [{
        name: '',
        data: [
            38, 36, 35, 34, 33, 32, 30, 29, 27, 26, 25
        ],
        marker: {
            enabled: false
        },
        fillColor: {
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            },
            stops: [
                [0, '#398fff91'],
                [1, '#6cacff00']
            ]
        }
    }]
};

const Dashboard: React.FC = () => {
    const initialGraphData = [
        { label: '29.04-05.05', value: 38 },
        { label: '6.05-12.05', value: 36 },
        { label: '13.05-19.05', value: 35 },
        { label: '20.05-26.05', value: 34 },
        { label: '27.05-02.06', value: 33 },
        { label: '03.06-09.06', value: 32 },
        { label: '10.06-16.06', value: 30 },
        { label: '17.06-23.06', value: 29 },
        { label: '24.06-30.06', value: 27 },
        { label: '01.07-07.07', value: 26 },
        { label: '08.07-14.07', value: 25 },
    ];

    const [graphData, setGraphData] = useState(initialGraphData);
    const [value, setValue] = useState(initialGraphData[0]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        // Check if the newValue is a number
        if (!isNaN(Number(newValue))) {
            setGraphData((prevState) =>
                prevState.map((item) =>
                    item.label === value.label
                        ? { ...item, value: Number(newValue) }
                        : item
                )
            );
            setValue((prevValue) => ({ ...prevValue, value: Number(newValue) }));
        }
    };

    const linChartOptionsData = useMemo(() => ({
        ...linChartOptions,
        series: [{
            ...linChartOptions.series[0],
            data: graphData.map((item) => item.value)
        }]
    }), [graphData]);

    return (
        <div className="w-[60%]">
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-12 md:col-span-6 p-4">
                    {/* Assuming Select and TextField components are correctly implemented */}
                    <Select options={graphData} onChange={(value) => setValue(value)} selected={value} />
                </div>
                <div className="col-span-12 md:col-span-6 p-4">
                    <TextField label={'values'} value={value?.value} onChange={handleChange} />
                </div>
            </div>
            <div className="w-full rounded-[30px] px-7 py-[35px] bg-white">
                <div className="flex items-center justify-between w-full pb-11">
                    <div className="flex items-center">
                        <span className="text-3xl font-semibold text-stone-900">Weekly Messages</span>&nbsp;
                    </div>
                    <div className="flex items-center gap-4 w-[360px] justify-end">
                        <div className="text-md text-slate-500 rounded-[8px] flex items-center gap-2 px-1 py-[3px] font-semibold h-11 border">
                            &lt;<span>27.06.2024 - 02.07.2024</span>&gt;
                        </div>
                        <button className="border py-2 px-3 border-yellow-400 bg-yellow-50 rounded-md">
                            {/* Assuming ASSETS.SVGS.FILTER is imported correctly */}
                            <Image height={17} width={17} src={ASSETS.SVGS.FILTER} alt="filter" />
                        </button>
                    </div>
                </div>
                <div className="w-full flex items-end justify-between mb-6">
                    <div className="px-2">
                        <span className="text-5xl font-medium text-stone-700">31</span>&nbsp;
                        <span className="text-xl text-slate-500">messages</span>
                    </div>
                    <div className="flex gap-[1px] items-center">
                        <Image width={20} height={20} src={ASSETS.SVGS.PROGRESS_UP} alt='logo' />&nbsp;
                        <span className="text-[#f63535] font-medium">13.2%</span>&nbsp;
                        <span className="text-sm text-slate-500">than previous week</span>
                    </div>
                </div>
                {linChartOptionsData && <LineChart options={linChartOptionsData} />}
            </div>
        </div>
    );
};

export default Dashboard;
