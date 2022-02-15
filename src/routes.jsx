import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MeetingAddContainer from "./containers/meetings/add";
import MeetingHomeContainer from "./containers/meetings/home";


export const AppRoutes = () => {
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/add" element={<MeetingAddContainer />} />
                <Route path="/" element={<MeetingHomeContainer />} />
            </Routes>
        </BrowserRouter>
    </div>
}

export default AppRoutes;