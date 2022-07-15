import axios from 'axios';
import React, {useState} from 'react'
import {Link} from "react-router-dom";
import { API_URL } from '../constants';

export default function Profile(props) {
  const [state, setState] = useState("");

  //state= {selectedFile: null} 
  const fileChangedHandler=(event)=>{
    this.setState ({selectedFile: event.target.files[0]})
  }
  const uploadHandler = ()=> {
    const formData = new FormData()
    formData.append(
      this.state.selectedFile
    )
    axios.post(`${API_URL}`, formData) }
  
  
  return (
    <div className='Back'>
      <h1>Profile</h1>
      <p>Username {props.username}</p>
      <p>Campus {props.campus}</p>
      <p>Course {props.course}</p>
      <Link to={"/auth/logout"} >Logout</Link>
      <img src={props.image}/>
      <input type="file" onChange={fileChangedHandler}/>
      <button onClick={uploadHandler}></button>

      
    </div>
  )
}
