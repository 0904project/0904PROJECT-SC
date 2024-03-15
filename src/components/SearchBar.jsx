import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import React, {useRef, useState} from "react";
import {words} from "../datas/data";

// eslint-disable-next-line react/prop-types
export default function SearchBar({isSearchOpen}) {
    const [search, setSearch] = useState([]);
    const inputRef = useRef();

    const handleClick = (e) => {
        e.preventDefault();
        inputRef.current.focus();
    }
    const handleSearch = (e) => {
        const inputValue = e.target.value.toLowerCase();
        if (inputValue === '') {
            setSearch([])
            return false
        }
        setSearch(words.filter(w => w.toLowerCase().includes(inputValue)).slice(0,8))
    }
    return (
            <form action="" className={`w-[500px] right-52  justify-center items-center top-0 ${isSearchOpen ? 'search-mobile' : 'hidden'}  lg:block relative `}>
                <div className="relative">
                    <input type="search" ref={inputRef} placeholder={'Ketikan disini'}
                           className={'w-full p-3 rounded-full bg-slate-200 focus:outline-none'} onChange={(e) => handleSearch(e)}/>
                    <button onClick={handleClick} className={'absolute  right-1 top-1/2 -translate-y-1/2 p-2 bg-slate-300 rounded-full'}>
                        <SearchRoundedIcon/>
                    </button>
                </div>
                {
                    search.length > 0 && (
                        <div className="absolute top-16 p-4 bg-slate-200 text-slate-950 w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
                            {search.map(s => (
                                <span className={'px-5 hover:bg-slate-300 p-0.5 rounded-md'} key={s}>{s}</span>
                            ))}
                        </div>
                    )
                }
            </form>
    )
}