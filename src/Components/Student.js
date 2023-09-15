import React, { useContext } from 'react'
import StoreData from './Store'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Student = () =>{
    const context = useContext(StoreData)
    const navi = useNavigate()
    console.log(context)
    return(
        <>
        <h1>Students Details</h1>
        <button onClick={()=>navi('/Addnewstudent')}>Add New Student</button>
        <table>
            <thead>
                <th className="col1">Name</th>
                <th className="col2">Age</th>
                <th className="col2">Course</th>
                <th className="col2">Batch</th>
                <th className="col2">Change</th>
            </thead>
            <tbody>
                {context.StudentName.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td className="col1">{item.Name}</td>
                            <td className="col2">{item.Age}</td>
                            <td className="col2">{item.Course}</td>
                            <td className="col2">{item.Batch}</td>
                            <td className="col2">{<Link to='/editstudent' state={{data:index}}>Edit</Link>}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
        
    )
}
export default Student;