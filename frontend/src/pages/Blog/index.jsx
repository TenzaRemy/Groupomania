import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const NavLink = styled.nav`
    display: flex;
    justify-content: center;
`
const BlocLink = styled.ul`
    display: flex;
`
const List = styled.li`
    padding: 20px;
    font-size: 18px;
    color: black;
`

function Blog() {
    
  
    return (
      <div>
        <NavLink>
            <BlocLink>
            <Link to="/Profil"><List>Mon Profil</List></Link>
                <List>Se Déconnecter</List>
            </BlocLink>
        </NavLink>
      </div>
    )
  }

  
export default Blog