import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../constants';
import { AuthContext } from '../context/auth.context';

export default function Profile(props) {
  const [state, setState] = useState('');
  const navigate=useNavigate();
  //state= {selectedFile: null}
  const fileChangedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };
  const uploadHandler = () => {
    const formData = new FormData();
    formData.append(this.state.selectedFile);
    axios.post(`${API_URL}`, formData);
  };
  

  const { user, logOutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logOutUser();
navigate ("/");
  };
  return (
    <div className="Back">
      <h1>Profile</h1>
      <p>Username {user?.username}</p>
      <p>Campus {user?.campus}</p>
      <p>Course {user?.course}</p>
      <button onClick={handleLogout}>Logout</button>
      <img src={user?.image} />
      <input type="file" onChange={fileChangedHandler} />
      <button onClick={uploadHandler}></button>
    </div>
  );
}
