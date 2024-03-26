// eslint-disable-next-line no-unused-vars
import React from "react";
import {BadgeCheck} from "lucide-react";
import dataCard from "../datas/dataCard.jsx";


// eslint-disable-next-line react/prop-types
export default function LatestProduct({selectedTag}) {
    let sortedData = [...dataCard];

    if (selectedTag.length > 0) {
        sortedData = sortedData.filter(item => item.language.some(lang => selectedTag.includes(lang.toLowerCase())));
    }

    let latestData = sortedData.slice(-Math.min(5, sortedData.length));
    return (
        <>
        {latestData.map(({title, status},index) => (
                <div className={'flex gap-2 mt-3 w-[240px] mb-8  '} key={index}>
                    <div className="rounded-lg overflow-hidden hover:shadow-md cursor-pointer ">
                        <a href="/produk/detail">
                        <img src={`https://source.unsplash.com/random`} alt="jokes-random" className="w-[100px] h-[60px] max:w-[300px] max:h-[90px] object-cover"/>
                        </a>
                    </div>
                    <div className="flex flex-wrap">
                        <a href={'/produk/detail'} className={'flex  text-[12px] max:text-[13px] font-semibold text-slate-950'}>{title} </a>
                        <aside className={'flex flex-wrap gap-1'}>
                            <div className={'w-3 h-3 max:h-5 max:w-5 p-0.5 max:p-1 rounded-full bg-emerald-500'}>
                                <img src="../../public/vite.svg" alt=""/>
                            </div>
                            <div className="flex flex-col relative  ">
                                <div className="flex items-center max:top-0.5 relative  gap-1 max:gap-1 ml-0 max:ml-0">
                                    <h1 className={'font-semibold microsoft2:text-[8px] max:text-[10px]  text-black'}>0904
                                        Project</h1>
                                    <BadgeCheck size={10} className={'fill-green-600 rounded-full text-slate-100'}/>
                                </div>
                                <div className="relative right-3 max:right-5 ">
                                    <h3 className={'text-slate-400 text-[8px] max:top-2 relative'}>{status} </h3>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            ))}
</>
)
}