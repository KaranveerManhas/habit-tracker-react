import { useLocation } from "react-router-dom"
import GetStarted from "../../pages/get_started/GetStarted";
import { Home } from "../../pages/home/Home";

import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { WeekView } from "../../pages/week_view/WeekView";


export const AnimatedRoutes = () => {
    const location = useLocation();
    

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<GetStarted />} />
                <Route path='/home' element={<Home />} />
                <Route path="/week-view" element={<WeekView />} />
            </Routes>
        </AnimatePresence>
        
    )

}