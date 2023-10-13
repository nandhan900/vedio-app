import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistory } from '../services/allAPI'


function WatchHistory() {
  const [history,setHistory]=useState([])
const getAllwatchHistory=async()=>{
  //make api call
  const{data}=await getHistory()
  setHistory(data);

}
useEffect(()=>{
  getAllwatchHistory()
},[])
const handleDeletehistory=async(id)=>{
getAllwatchHistory()
console.log(history);
}


  return (
    <>
     <div className="container mt-5 mb-55 d-flex justify-content-between " >
      <h3>Watch History</h3>
      <Link to={'/home'} className='d-flex align-items-center' style={{textDecoration:'none',fontSize:'20px',color:'white'}}>
      <i className="fa-solid fa-arrow-left fa-beat-fade me-2"></i>Back to Home
      </Link>
     </div>
     <table className='table mt-5 mb-5 container'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
        </tr>
      </thead>
      <tbody>
        {
        history?.length>0?
        history.map((item,index)=>(
          <tr>
            <td>{index+1}</td>
            <td>{item?.caption}</td>
            <td><a href={item?.embedlink} target='_blank'>{item?.embedlink}</a></td>
            <td>{item?.timestamp}</td>
          </tr>

        ))
        :<p className='fw-bolder mt-3 fs-5 text-danger'>Nothing to display!!!</p>
      }
      </tbody>

     </table>
    </>
  )
    }


export default WatchHistory;