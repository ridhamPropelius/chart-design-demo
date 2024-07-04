import React, { useEffect } from "react";
import Card from "@/Components/_component/Card";
import { cn } from "@/Components/utils/utils";
import Image from "next/image";
import { ASSETS } from "@/assets";
import Progressbar from "@/Components/_component/Progressbar/Progressbar";
import { data } from "@/Components/utils/data";

const Channel: React.FC = () => {
    const [selected, setSelected] = React.useState('hour');
    const [selectedData, setSelectedData] = React.useState(data[selected])

    console.log({selectedData});
    
    let totalComm = Number(selectedData.reduce((a, b) => { return a.noOfMessage + b.noOfMessage },0))

    useEffect(() => {
        setSelectedData(data[selected])
        totalComm = Number(selectedData.reduce((a, b) => { return a.noOfMessage + b.noOfMessage },0))
    }, [selected])

    return (
        <Card className="w-[50%]">
            <div className="flex items-center justify-between w-full pb-11">
                <div>
                    <span className={`text-3xl font-medium text-stone-700`}>Messages By Channel</span> &nbsp;
                </div>
                <div className="flex items-center gap-4 w-[360px] justify-end">
                    <button className="border py-1 px-2 border-yellow-400 bg-yellow-50 rounded-md">
                        <Image height={25} width={25} src={ASSETS.SVGS.FILTER} alt="filter" />
                    </button>
                    <div className={`text-xl bg-slate-100 rounded-[8px] grid grid-cols-3 gap-3 px-1 py-[3px] font-semibold h-11 border`}>
                        <button className={cn("h-full rounded-md flex min-w-16 justify-center cursor-pointer items-center ",
                            selected === 'hour' && 'bg-white border'
                        )}
                            onClick={() => setSelected('hour')}
                        >
                            Hour
                        </button>
                        <button className={cn("rounded-md flex min-w-16 justify-center  cursor-pointer items-center",
                            selected === 'day' && 'bg-white border'
                        )}
                            onClick={() => setSelected('day')}
                        >
                            Day
                        </button>
                        <button className={cn("rounded-md flex min-w-16 justify-center cursor-pointer items-center",
                            selected === 'week' && 'bg-white border'
                        )}
                            onClick={() => setSelected('week')}
                        >
                            Week
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <Progressbar title="All" totalComment={totalComm} />
                {selectedData.map((data, index) =>{   
                    console.log("comment :: ",data.noOfMessage);
                    console.log("Total comment :: ",totalComm);
                    return <Progressbar key={index} title={data.title} individualComment={data.noOfMessage} totalComment={totalComm} logo={data.logo}/>
                }
                )}
            </div>
        </Card>
    )
};

export default Channel;