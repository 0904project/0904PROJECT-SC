import React, {useEffect, useState, useContext} from 'react'
import StrollerIcon from '@mui/icons-material/Stroller';
import PersonIcon from '@mui/icons-material/Person';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import {SidebarContext} from "./Sidebar";
import ListProfile from "./ListProfile.jsx";
import Notification from "./Notification.jsx";
import {useLocation,Link} from 'react-router-dom';
import SearchBar from "./SearchBar.jsx";


// eslint-disable-next-line react/prop-types
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [buka, setBuka] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const {expanded, setExpanded} = useContext(SidebarContext);
    const location = useLocation();
    const pathNames = location.pathname.split("/").filter((x) => x);

    const toggleMenu = () => {
        // setIsOpen(!isOpen);
        setExpanded(curr => !curr);
    }
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (e.target.id !== 'hamburger' && e.target.id !== 'nav-menu') {
                setIsOpen(false)
            }
        }
        if (isOpen) {
            document.addEventListener('click', handleClickOutside)
        }
        return () => {
            window.removeEventListener('click', handleClickOutside)
        }
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const show = window.pageXOffset || document.documentElement.scrollTop;
            if (show > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // apabila mau menggunakan reload mode pada logo 0904PROJECT onClick={(e) => {e.preventDefault(); window.location.reload();}}
    return (
        <>
            <header
                className={`fixed bg-slate-100 max:pl-24 top-0  left-0 w-full items-center flex ${expanded ? '' : ''}  ${isScrolled ? 'navbar-fixed ' : ''} `}
                style={{paddingLeft: expanded ? '18%' : ''}}>
                <div className="container my-[-8px] ">
                    <div className={`flex justify-between items-center relative`}>
                        <div className={`px-20 md:px-80 lg:px-20 max:px-2 bottom-0`}>
                            <a href="/home" onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({top: 0, behavior: 'smooth'});
                                window.history.pushState({}, '', '/');
                            }}
                               className={'text-primary text-center font-bold text-xl md:text-2xl block py-6 md:hidden'}>0904<span
                                className={'text-green-600'}>PROJECT</span></a>
                            <span
                                className={`text-primary  text-center font-bold text-xl ${pathNames.length > 0 ? 'py-7' :'py-10'}  hidden md:block capitalize `}>
                                {pathNames.map((value, index) => {
                                    const to = `/${pathNames.slice(0, index + 1).join("/")}`;
                                    const capitalizedValue = value.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

                                    return (
                                        <span  key={index}>
                                            <Link to={to}>
                                                <span>{capitalizedValue}</span>
                                            </Link>
                                            {index < pathNames.length - 1 && " > "}
                                        </span>
                                    );
                                })}
                            </span>
                        </div>
                        <div className="flex justify-between items-center mb-2 px-4">
                            <div id={'hamburger'} onClick={toggleMenu}
                                 className={`block absolute max-w-[36px] max-h-[36px] left-4 lg:hidden ${expanded ? 'hamburger-active' : ''}`}>
                            <span
                                className={'hamburger-line origin-top-left transition duration-300 ease-in-out'}></span>
                                <span className={'hamburger-line transition duration-300 ease-in-out'}></span>
                                <span
                                    className={'hamburger-line origin-bottom-left transition duration-300 ease-in-out'}></span>
                            </div>
                        </div>
                        <div
                            className={'flex items-center bottom-4 justify-center relative cursor-pointer left-14 md:left-[-8%] ipad4:left-[-1%] galaxy:left-[-4%] microsoft2:left-[-0.1rem] galaxy2:left-9 lg:left-[-100%] max:right-1 '}>
                            <div className={'relative flex top-4  right-36 items-center justify-center'}>
                                <SearchBar isSearchOpen={isSearchOpen}/>
                                <i onClick={() => setSearchOpen(prev => !prev)}
                                   className={'w-8 h-8 items-center lg:hidden justify-center bg-slate-50 rounded-full p-1 absolute active:bg-slate-300'}>
                                    <SearchRoundedIcon/>
                                </i>
                            </div>
                            <div className={'relative right-28'}>
                                <i onClick={() => setOpen(true)}
                                   className={'w-8 h-8 items-center justify-center bg-slate-50 rounded-full p-1 absolute active:bg-slate-300'}>
                                    <StrollerIcon/>
                                </i>
                            </div>
                            <div className="items-center right-16 lg:left-18 w-8  relative">
                                <i className={'w-8 h-8 items-center justify-center bg-slate-50 rounded-full p-1 absolute active:bg-slate-300 '}>
                                    <PersonIcon onClick={() => setBuka(!buka)}/>
                                </i>
                                {/*<img src="/public/vite.svg" alt=""/>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <ListProfile buka={buka}
                             className={'dropProfile absolute top-[4.5rem] right-16 w-[120px] p-[15px] rounded-md bg-white border-1 border-gray-100 microsoft2:right-10 xl:right-16 max:right-20 '}/>
            </header>
            <Notification open={open} onClose={() => setOpen(false)} title="COMING SOON">
                <div className={'flex flex-wrap'}>
                    <StrollerIcon style={{
                        fontSize: '100px',
                        width: '100%',
                        color: 'gray',
                        marginTop: '10px',
                        marginBottom: '10px'
                    }}/>
                </div>
            </Notification>
        </>
    )
}
