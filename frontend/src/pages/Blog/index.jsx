import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Link } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import Logo from '../../assets/icon-left-font-removebg.png'

const NavLink = styled.nav`
    display: flex;
    justify-content: start;
    background-color: ${colors.tertiary};
    box-shadow: 1px 2px 1px 1px black;
`
const BlocLink = styled.ul`
    display: flex;
    justif-content: space-between;
`
const List = styled.li`
    padding: 15px 30px 10px 50px;
    font-size: 30px;
    color: ${colors.secondary};
`
const FormLogo = styled.img`
  width: 290px;
`


function Blog() {
    
  
    return (
      <div>
        <NavLink>
            <BlocLink>
            <FormLogo src={Logo} alt="Logo de l'entreprise Groupomania" />
            <Link to="/Profil"><List><CgProfile /></List></Link>
            <Link to="/"><List><BiLogOut /></List></Link>
            </BlocLink>
        </NavLink>
      </div>
    )
  }

  
export default Blog