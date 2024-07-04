import React from "react";
import * as Highcharts from 'highcharts';
import Graph from "../GraphChart/Graph";
import Channel from "../Channel";

const Dashboard : React.FC = () =>{
    return(
        <div className="w-full flex m-auto items-center justify-center flex-col gap-3">
          {/* <Graph/> */}
          <Channel/>
        </div>
    )
};

export default Dashboard;