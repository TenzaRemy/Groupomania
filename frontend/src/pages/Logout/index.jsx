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
        if (res.status === 200) {
            alert('Déconnexion en cours');
        
        }  
      })
      .catch(function (err) {
        alert(' Déconnexion impossible')
        console.log(err)
      })
     
    
    return (
        <div>Page de déconnexion</div>

    )

}

export default Logout