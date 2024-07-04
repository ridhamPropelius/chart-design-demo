import React from "react";
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface Props {
    options : Highcharts.Options,
    props : HighchartsReact.Props,
}

const LineChart : React.FC = ({options,...props}:Props) =>{
    return(
        <>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                {...props}
            />
        </>
    )
};

export default LineChart;