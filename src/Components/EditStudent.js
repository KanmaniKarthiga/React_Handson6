import React, { useContext } from "react";
import StoreData from "./Store";
import { useLocation, useNavigate } from "react-router-dom";

function EditStudent(){
    const contextData = useContext(StoreData)
    const navi = useNavigate();
    const indexValue = useLocation().state.data;
    const updateObj = {
        Name : contextData.StudentName[indexValue].Name,
        Age : contextData.StudentName[indexValue].Age,
        Course : contextData.StudentName[indexValue].Course,
        Batch : contextData.StudentName[indexValue].Batch,
    }

    const handleChange=(e)=>{
        updateObj[e.target.name] = e.target.value;
    }
    const handleClick=(e)=>{
        e.preventDefault();
        contextData.StudentName[indexValue] = updateObj;
        navi('/student')
    }
    const cancelClick = (e) =>{
        e.preventDefault()
        navi('/student')
    }
    return(
        <>
        <form className="newform">
            <input type="text" name="Name" id="name" placeholder={contextData.StudentName[indexValue].Name} required onChange={handleChange}/>           
            <input type="number" name="Age" id="age" placeholder={contextData.StudentName[indexValue].Age} required onChange={handleChange}/>
            <input type="text" name="Course" id="course" placeholder={contextData.StudentName[indexValue].Course} required onChange={handleChange}/>        
            <input type="text" name="Batch" id="batch" placeholder={contextData.StudentName[indexValue].Batch} required onChange={handleChange}/>

            <button onClick={handleClick} className="btn">Update</button>
            <button onClick={cancelClick} className="btnCancel">Cancel</button>
        </form>
        </>

    )
}
export default EditStudent;