import React, { useContext } from "react";
import StoreData from "./Store";
import { useNavigate } from "react-router-dom";

const Addnewstudent=()=>{
    const navi = useNavigate();
    const contextData = useContext(StoreData)
    const newstudent = {
        Name : "",
        Age : "",
        Course : "",
        Batch : "",
        Change : ""
    }

    const handleChange=(e)=>{
        newstudent[e.target.name] = e.target.value;
    }
    const handleClick=(e)=>{
        e.preventDefault();
        contextData.StudentName.push(newstudent)
        console.log(contextData)
        navi('/student')
    }
    const cancelClick = (e) =>{
        e.preventDefault()
        navi('/student')
    }
    return(
        <>
        <form className="newform">
            <div className="inputBox">
                <input type="text" name="Name" id="name" required onChange={handleChange}/> 
                <span className="span1">Name</span>
            </div>
            <div className="inputBox">
                <input type="number" name="Age" id="age" required onChange={handleChange}/> 
                <span className="span2" style={{backgroundColor:'rgb(172 192 195)' }}>Age</span>  
            </div> 
            <div className="inputBox">       
                <input type="text" name="Course" id="course" required onChange={handleChange}/> 
                <span className="span3" style={{backgroundColor:'rgb(239 190 213)'}}>Course</span>
            </div>            
            <div className="inputBox">
                <input type="text" name="Batch" id="batch" required onChange={handleChange}/>
                <span className="span4" style={{backgroundColor:'rgb(239 190 213)'}}>Batch</span>
            </div>

            <button onClick={handleClick} className="btn">Submit</button>
            <button onClick={cancelClick} className="btnCancel">Cancel</button>
        </form>
        </>
    )
}
export default Addnewstudent;