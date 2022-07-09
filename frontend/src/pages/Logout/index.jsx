import React from "react";

function Logout() {

    fetch('http://localhost:5000/api/auth/Logout', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(function (res) {
          window.location = '/';
          localStorage.clear(); 
      })
      .catch(function (err) {
        console.log(err)
      })
     
    
    return (
        <div></div>

    )

}

export default Logout