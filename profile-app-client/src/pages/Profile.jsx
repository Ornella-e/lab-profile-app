import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../constants';
import { AuthContext } from '../context/auth.context';

export default function Profile(props) {
  const [state, setState] = useState('');

  //state= {selectedFile: null}
  const fileChangedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };
  const uploadHandler = () => {
    const formData = new FormData();
    formData.append(this.state.selectedFile);
    axios.post(`${API_URL}`, formData);
  };

  const { user } = useContext(AuthContext);
  return (
    <div className="Back">
      <h1>Profile</h1>
      <p>Username {user?.username}</p>
      <p>Campus {user?.campus}</p>
      <p>Course {user?.course}</p>
      <Link to={'/auth/logout'}>Logout</Link>
      <img src={user?.image} />
      <input type="file" onChange={fileChangedHandler} />
      <button onClick={uploadHandler}></button>
    </div>
  );
}
