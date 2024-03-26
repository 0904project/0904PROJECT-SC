// eslint-disable-next-line no-unused-vars
import React from "react";
import {ThumbsUp, MessageCircle,Bookmark,ShoppingCart,BadgeCheck} from "lucide-react";

// eslint-disable-next-line react/prop-types
export default function Card({ img, title, likes, comments,status,handleClick,formatPrice,price }) {
    return (
        <>
            <div className=" mb-3 max:mb-0 p-4 bg-white shadow-md rounded-xl max:h-[350px] hover:shadow-2xl">
                <div className="rounded-xl shadow-md overflow-hidden">
                    <img src={`${img}`} alt="jokes-random" className="w-full h-[150px] object-cover"/>
                </div>
                <div className="flex items-center justify-center ">
                    <h1 className={'font-semibold  text-lg  lg:text-sm text-black mt-2 '}>{title}</h1>
                    <div className="flex items-center ml-3 text-black text-xs mt-2">
                        <ThumbsUp size={15} />
                        <span className="ml-1">{formatPrice(likes)}</span>
                    </div>
                    <div className="flex items-center ml-3 text-black text-xs mt-2">
                        <MessageCircle size={15} />
                        <span className="ml-1">{formatPrice(comments)}</span>
                    </div>
                </div>
                {/*<p className={'font-medium text-sm lg:text-xs text-slate-500  mt-3'}>{description}</p>*/}
                <div className="flex justify-between items-center relative top-2 ">
                    <aside className={'mt-5'}>
                        <div className={'w-8 max:w-6 p-1 rounded-full bg-emerald-500'}>
                        <img src="../../public/vite.svg" alt=""/>
                        </div>
                        <div className="flex flex-col relative left-8 lg:left-7 bottom-7  max:bottom-6">
                            <div className="flex items-center gap-2 max:gap-1 ml-2 max:ml-0">
                                <h1 className={'font-semibold text-md microsoft2:text-sm max:text-[15px] text-black'}>0904 Project</h1>
                                <BadgeCheck size={10} className={'fill-green-600 rounded-full text-slate-100'}/>
                            </div>
                        </div>
                    </aside>
                    <aside className={'flex gap-2 px-4 microsoft2:px-2  microsoft2:gap-0 mb-5 max:mb-6 '}>
                        <button className="p-3 w-7  max:h-6 h-7 max:w-6   rounded-full ">
                        <Bookmark size={20} className={'active:fill-yellow-400 active:text-yellow-400 active:animate-ping'}/>
                        </button>
                        <button className="p-3 w-7 max:w-6  h-7  max:h-6  rounded-full">
                        <ShoppingCart size={20}/>
                        </button>
                    </aside>
                </div>
                <footer className={' relative'}>
                    <div className="flex justify-between items-center ">
                        <div className="flex flex-col px-5 max:px-0 gap-2 top-4 relative mb-3">
                        <p className={'text-[15px] max:px-0 text-slate-800 font-bold'}>Rp{formatPrice(price)}</p>
                        <h3 className={'text-slate-300 text-[12px] max:text-[10px] italic font-semibold top-1 relative'}>{status}</h3>
                        </div>
                        <button onClick={handleClick} className={'px-2.5 py-1.5 rounded-full text-slate-800 font-semibold text-center text-xs bg-emerald-500 hover:bg-emerald-700 active:bg-emerald-700 '}>View Product</button>
                    </div>
                </footer>
            </div>
        </>
    )
}