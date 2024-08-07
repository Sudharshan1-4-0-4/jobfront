import React, { useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie'




import './index.css';

function User() {
  const [user, setUsers] = useState({});

  const username = Cookies.get('user_name');
  const password = Cookies.get('password');
  
  console.log("exxx");
  console.log(username);
  console.log(password);
  console.log("eee");

  useEffect(() => {

    const detailscalling = async () => {

      const userdetails = { username, password };
      
      
      const url = "https://jobback-rl11.onrender.com/userDetails/";

      const options = {
        headers: {
          "Content-Type": "application/json",
        },
        method: 'POST',
        body: JSON.stringify(userdetails),
      };

      const response = await fetch(url, options);
      
      if (response.ok) {
       
        const data = await response.json(); // Parse response body as JSON
        
        setUsers(data);
        
      } else {
        console.log("Error adding users");
      }
    };

    detailscalling();

  }, []);

  return (
    <div className='user'>
        <h1>👨‍🎓{user.name}</h1>
        <p>✉️{user.email}</p>
        <p>"Unlock your potential, explore endless opportunities."</p>
       
    </div>
  );
}



export default User;
