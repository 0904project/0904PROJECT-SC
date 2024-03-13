import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Sidebar, {SidebarItem, SidebarContext} from "./components/Sidebar.jsx";
import {LayoutDashboard} from "lucide-react";
import LandingPage from "./pages/LandingPage.jsx";
import Product from "./pages/Product.jsx";
// import OtherPage from "./pages/OtherPage.jsx";

function App() {
    const [expanded, setExpanded] = useState(false);


    return (
        <SidebarContext.Provider value={{ expanded, setExpanded }}>
            <Router>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Sidebar>
                        <SidebarItem icon={<LayoutDashboard size={20}/>} text={'home'} />
                        <SidebarItem icon={<LayoutDashboard size={20}/>} text={'home'} />
                        <SidebarItem icon={<LayoutDashboard size={20}/>} text={'home'} />
                        <SidebarItem icon={<LayoutDashboard size={20}/>} text={'home'} />
                        <SidebarItem icon={<LayoutDashboard size={20}/>} text={'home'} />
                        <SidebarItem icon={<LayoutDashboard size={20}/>} text={'home'} />
                    </Sidebar>
                    <div style={{ flexGrow: 1 }}>
                        <Navbar/>
                        <Routes>
                            <Route path="/" exact Component={LandingPage} />
                            <Route path="/" exact Component={Product} />
                            {/* <Route path="/other" component={OtherPage} /> */}
                        </Routes>
                    </div>
                </div>
            </Router>
        </SidebarContext.Provider>
    )
}

export default App;