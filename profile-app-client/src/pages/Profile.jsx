import React from 'react'
import {Link} from "react-router-dom";

export default function Profile(props) {
  return (
    <div className='Back'>
      <h1>Profile</h1>
      <p>Username {props.username}</p>
      <p>Campus {props.campus}</p>
      <p>Course {props.course}</p>
      <Link to={"/auth/logout"} >Logout</Link>
      <img src={props.image}/>
      <Link to={"/auth/logout"} >Edit Photo</Link>
    </div>
  )
}
