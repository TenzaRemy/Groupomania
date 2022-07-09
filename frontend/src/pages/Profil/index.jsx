import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
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
    justify-content: space-between;
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
    color: red;
`
fetch('http://localhost:5000/api/auth/user', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

function Profil() {
    
    const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.token) {
      navigate("/error");
    }
  }, [navigate]);
   

    return (
        <div>
        <NavLink>
            <BlocLink>
            <FormLogo src={Logo} alt="Logo de l'entreprise Groupomania" />
            <Link to="/Blog"><IconHome><AiFillHome /></IconHome></Link>
            </BlocLink>
        </NavLink>
        <BlocProfil>
            <Pseudo>Pseudo123</Pseudo>
        </BlocProfil>
      </div>
    )
}

export default Profil