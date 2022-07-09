import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import colors from "../../utils/style/colors";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import styled from "styled-components";
import Logo from '../../assets/icon-left-font-removebg.png';
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Picture from '../../assets/pp.png';

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
    margin: 75px auto;
    background-color: ${colors.tertiary};
    color: #b3b8cd;
    border-radius: 5px;
    width: 350px;
    height: 400px;
    text-align: center;
    box-shadow: 0 10px 20px -10px rgba(0,0,0,.75);
`

const ProfilPic = styled.img`
    height: 190px;
    width: 260px;
    margin-top: 20px;
`
const Pseudo = styled.h2`
    color: ${colors.primary};
    opacity: 0.9;
`
const Reseau = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 22px;
    margin-bottom: 5px;
`

function Profil() {
    const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.token) {
      navigate("/Unauthorized");
    }
  }, [navigate]);

    let user = JSON.parse(localStorage.getItem("userdata"));

    return (
        <div>
        <NavLink>
            <BlocLink>
            <FormLogo src={Logo} alt="Logo de l'entreprise Groupomania" />
            <Link to="/Blog"><IconHome><AiFillHome /></IconHome></Link>
            </BlocLink>
        </NavLink>
        <BlocProfil>
            <div>
                <ProfilPic src={Picture} alt="Profil" />
            </div>
                <Pseudo>{user.pseudo}</Pseudo>
                <h3>Employé de Groupomania</h3>
                <h4>{user.email}</h4>
            <Reseau>
                <FaFacebookF />
                <FaTwitter />
                <FaDribbble />
                <FaLinkedinIn />
            </Reseau>
        </BlocProfil>
        </div>
    )
}

export default Profil