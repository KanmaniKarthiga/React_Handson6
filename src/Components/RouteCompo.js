import React, { useState } from "react";
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Home from "./Home";
import Student from "./Student";
import Contact from "./Contact";
import StoreData from "./Store";
import Addnewstudent from "./Addnewstudent";
import EditStudent from "./EditStudent";


function RouteCompo(){
    const [studentData, setstudentData] = useState([
        {Name : "John", Age : 25, Course : "MERN", Batch : "March", Change : "Edit"},
        {Name : "Reba", Age : 23, Course : "MERN", Batch : "March", Change : "Edit"},
        {Name : "Dhoni", Age : 24, Course : "MERN", Batch : "April", Change : "Edit"},
        {Name : "Rishikesh", Age : 28, Course : "MERN", Batch : "October", Change : "Edit"},
        {Name : "Smita", Age : 25, Course : "MERN", Batch : "February", Change : "Edit"},
        {Name : "Sheethal", Age : 22, Course : "MERN", Batch : "September", Change : "Edit"},
        {Name : "Kiran", Age : 23, Course : "MERN", Batch : "April", Change : "Edit"},
    ])
    return(
        <>
        <BrowserRouter>
        <div className="navbar">
            <NavLink to='/' className="link">Home</NavLink>
            <NavLink to='/student' className="link">Student</NavLink>
            <NavLink to='/contact' className="link">Contact</NavLink>
        </div>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/student" element={
                    <StoreData.Provider value={{StudentName : studentData, UpdateStudent: setstudentData}}>
                        <Student/>
                    </StoreData.Provider>
                }/>
                <Route path="/addnewstudent" element={
                    <StoreData.Provider value={{StudentName : studentData, UpdateStudent: setstudentData}}>
                        <Addnewstudent/>
                    </StoreData.Provider>
                }/>
                <Route path="/editstudent" element={
                    <StoreData.Provider value={{StudentName : studentData, UpdateStudent: setstudentData}}>
                        <EditStudent/>
                    </StoreData.Provider>
                }/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}
export default RouteCompo;