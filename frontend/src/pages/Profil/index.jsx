import React from "react";
import colors from "../../utils/style/colors";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import styled from "styled-components";
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
const FormLogo = styled.img`
  width: 290px;
`

const IconHome = styled.li`
    padding: 15px 30px 10px 50px;
    font-size: 30px;
    color: ${colors.secondary};
`
const BlocProfil = styled.div`
    border: 1px black solid;
`

const Pseudo = styled.h1`
    colors: red;
`


function Profil(props) {
    
    const userInput = {pseudo:"Richard", email:"" }
   

    return (
        <div>
        <NavLink>
            <BlocLink>
            <FormLogo src={Logo} alt="Logo de l'entreprise Groupomania" />
            <Link to="/Blog"><IconHome><AiFillHome /></IconHome></Link>
            </BlocLink>
        </NavLink>
        <BlocProfil>
            <Pseudo>{userInput.pseudo}</Pseudo>
        </BlocProfil>
      </div>
    )
}

export default Profil