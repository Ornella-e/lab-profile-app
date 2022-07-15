import React from 'react';
import {Link} from "react-router-dom";


export default function HomePage() {
  return (
	  
	
    <div className='Back' >

		<h1>IronProfile</h1>
		<p>Today we will create an app with authoritation, adding some style!</p>
			<Link to={"/auth/signup"} className="Sign">Signup</Link>
			
			<Link to={"/auth/login"} className="Sign">Signin</Link>		

    </div>
	
  )
}
