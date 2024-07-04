import Image from 'next/image';
import React from 'react'

type BarDataType = {
    title: string;
    totalComment: number;
    individualComment?:number;
    logo?:string;
}

const Progressbar:React.FC<BarDataType> = ({title,totalComment,individualComment,logo}) => {
    const percentage = Number(((individualComment / totalComment) * 100).toFixed(2)); 
    return (
        <div className='pb-8 px-2'>
            <div className='flex justify-between items-center pb-4 text-lg font-medium'>
                <span className='flex items-center gap-2'>
                    {logo && <Image width={20} height={20} src={logo} alt='logo'/>}{title}</span>
                <span>{title==='All'?`${totalComment} - ${percentage}%`:`${individualComment} - ${percentage}%`}-WoW</span>
            </div>
            <div className="flex w-full h-2.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar">
                <div className={`flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500`} style={{width:`${percentage}%`}}></div>
            </div>
        </div>
    )
}

export default Progressbar