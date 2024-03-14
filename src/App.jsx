import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Sidebar, {SidebarItem, SidebarContext} from "./components/Sidebar.jsx";
import {Home,Compass,Bolt,UsersRound,Send} from "lucide-react";
import LandingPage from "./pages/LandingPage.jsx";
import Product from "./pages/Product.jsx";
import DetailProduct from "./pages/DetailProduct.jsx";
// import OtherPage from "./pages/OtherPage.jsx";

function App() {
    const [expanded, setExpanded] = useState(false);


    return (
        <SidebarContext.Provider value={{ expanded, setExpanded }}>
            <Router>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Navbar />
                    <Sidebar>
                        <SidebarItem icon={<Home size={20}/>} text={'Home'} to='/Home'/>
                        <SidebarItem icon={<Compass size={20}/>} text={'Product'} to='/Product' />
                        <SidebarItem icon={<Bolt size={20}/>} text={'category'} />
                        <SidebarItem icon={<UsersRound size={20}/>} text={'about'} />
                        <SidebarItem icon={<Send size={20}/>} text={'contact'} />
                    </Sidebar>
                    <div style={{ flexGrow: 1 }} className={`${expanded ? 'pl-[18%]' : 'pl-0 lg:pl-[80px]' } `}>
                        <Routes>
                            <Route path="/home" exact Component={LandingPage} />
                            <Route path="/product" exact Component={Product} />
                            <Route path='/product/detail' exact Component={DetailProduct} />
                            {/* <Route path="/other" component={OtherPage} /> */}
                        </Routes>
                    </div>
                </div>
            </Router>
        </SidebarContext.Provider>
    )
}

export default App;