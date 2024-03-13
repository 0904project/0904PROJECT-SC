import React, {createContext, useContext} from "react";
import {ChevronFirst, MoreVertical} from "lucide-react";

// mengubah sidebar menjadi navbar, dan juga membuat rekayasa header supaya dapat di samping, see you lanjut kan, tapi perlu istirahat dulu
export const SidebarContext = createContext()
// eslint-disable-next-line react/prop-types
export default function Sidebar({children}) {
    // const [expanded, setExpanded] = useState(false)
    const {expanded, setExpanded} = useContext(SidebarContext)
    return (
            <aside className={`relative h-screen mt-0 lg:z-[30000] top-0 ${!expanded ? 'w-0 lg:w-28 ' : 'w-[69px] lg:w-64'} `}>
                <nav className={`h-full flex flex-col bg-slate-300 border-r shadow-sm `}>
                    <div className="p-4 pb-2 flex justify-between items-center">
                        <a href="/" onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({top: 0, behavior: 'smooth'});
                            window.history.pushState({}, '', '/');
                        }}
                           className={`text-primary text-center font-bold overflow-hidden transition-all ${expanded ? 'w-32 ' : 'w-0'}`}>0904<span
                            className={'text-green-600'}>PROJECT</span></a>
                        <button onClick={() => setExpanded((curr) => !curr)}
                                className={`hidden lg:block p-1.5 rounded-lg text-black font-bold  ${expanded ? 'bg-slate-100 hover:bg-slate-100' : ''}`}>
                            {expanded ? <ChevronFirst/> : '0904'}
                        </button>
                    </div>
                    <SidebarContext.Provider value={{expanded}}>
                        <ul className={'flex-1 px-3'}>{children}</ul>
                    </SidebarContext.Provider>
                    <div className="border-t-2 flex p-3 ">
                        <a href="/"
                           className={`text-primary text-center font-bold text-xl md:text-2xl py-6 ${expanded ? ' md:opacity-100' : 'opacity-0 lg:opacity-100 '}`}>0904</a>
                        <div
                            className={`flex justify-between items-center lg:overflow-hidden transition-all ${expanded ? 'w-44 ml-3 opacity-0 lg:opacity-100' : 'w-0 opacity-0'}`}>
                            <div className={'leading-4'}>
                                <h4 className="font-semibold">PROJECT</h4>
                                <span className={'text-xs text-gray-500'}>farhanmaulana@gmail.com</span>
                            </div>
                            <MoreVertical size={20}/>
                        </div>
                    </div>
                </nav>
            </aside>
    )
}

// eslint-disable-next-line react/prop-types
export function SidebarItem({icon, text, active, alert}) {
    const {expanded} = useContext(SidebarContext)
    return (
        <li className={`relative flex group items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors 
        ${
            active ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
                : 'hover:bg-indigo-50 text-gray-600'
        }`}>
            {icon}
            <span className={`overflow-hidden transition-all ease-in-out ${
                expanded ? ' w-[1px] ml-0 lg:w-52   lg:ml-3 ' : 'w-0'
            }`}
            >
                {text}
            </span>
            {alert && (
                <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
                    expanded ? '' : 'top-2'
                }`}
                />
            )}
            {!expanded && (
                <div
                    className={'absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0'}
                >{text}</div>
            )}
        </li>
    )
}