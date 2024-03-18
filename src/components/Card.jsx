// eslint-disable-next-line no-unused-vars
import React from "react";
import {ThumbsUp, MessageCircle,Bookmark,Link,Bell,BadgeCheck} from "lucide-react";

// eslint-disable-next-line react/prop-types
export default function Card({ img, title, likes, comments,description,status,handleClick }) {
    return (
        <>
            <div className=" mb-3 max:mb-0 p-4 bg-white shadow-md rounded-xl">
                <div className="rounded-xl shadow-md overflow-hidden">
                    <img src={`${img}`} alt="jokes-random" className="w-full h-[150px] object-cover"/>
                </div>
                <div className="flex items-center justify-center ">
                    <h1 className={'font-semibold  text-lg  lg:text-sm text-black mt-2 '}>{title}</h1>
                    <div className="flex items-center ml-3 text-black text-xs mt-2">
                        <ThumbsUp size={15} />
                        <span className="ml-1">{likes}</span>
                    </div>
                    <div className="flex items-center ml-3 text-black text-xs mt-2">
                        <MessageCircle size={15} />
                        <span className="ml-1">{comments}</span>
                    </div>
                </div>
                <p className={'font-medium text-sm lg:text-xs text-slate-500  mt-3'}>{description}</p>
                <div className="flex justify-between items-center relative top-2 ">
                    <aside className={'mt-4'}>
                        <div className={'w-8 max:w-6 p-1 rounded-full bg-slate-200'}>
                        <img src="../../public/vite.svg" alt=""/>
                        </div>
                        <div className="flex flex-col relative left-8 lg:left-7 bottom-9  max:bottom-7">
                            <div className="flex items-center gap-2 max:gap-1 ml-2 max:ml-0">
                                <h1 className={'font-semibold text-md max:text-xs  text-black'}>0904 Project</h1>
                                <BadgeCheck size={10} className={'bg-green-600 rounded-full text-slate-300'}/>
                            </div>
                                <p className={'text-[10px] px-2 max:px-0 text-black'}>100 followers</p>
                        </div>
                    </aside>
                    <aside className={'flex gap-2 max:gap-1 mb-10 max:mb-5 '}>
                        <button className="p-1 w-6 h-6  rounded-full bg-slate-200">
                        <Bookmark size={15}/>
                        </button>
                        <button className="p-1 w-6 h-6  rounded-full bg-slate-200">
                        <Link size={15}/>
                        </button>
                        <button className="p-1 w-6 h-6  rounded-full bg-slate-200">
                        <Bell size={15}/>
                        </button>
                    </aside>
                </div>
                <footer className={' relative '}>
                    <div className="flex justify-between items-center">
                        <h3 className={'text-slate-400 text-[10px]'}>{status}</h3>
                        <button onClick={handleClick} className={'px-2.5 py-1.5 rounded-full text-slate-800 font-semibold text-center text-xs bg-green-600 hover:bg-green-700 active:bg-green-700 '}>View Product</button>
                    </div>
                </footer>
            </div>
        </>
    )
}