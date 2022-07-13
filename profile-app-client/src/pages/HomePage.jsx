import React from 'react';
import {Link} from "react-router-dom";


export default function HomePage() {
  return (
	  
	
    <div className='Back' >

		<h1>IronProfile</h1>
      <ul>
				<li>
					<Link to={"/auth/signup"} className="Sign">Signup</Link>
				</li>
				<li >
					<Link to={"/auth/signin"} className="Sign">Signin</Link>
				</li>
			</ul>

    </div>
	
  )
}
