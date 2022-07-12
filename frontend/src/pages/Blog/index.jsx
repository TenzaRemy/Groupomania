import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Link } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import Logo from '../../assets/icon-left-font-removebg.png';
import PostCreate from '../../components/PostCreate';

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
const List = styled.li`
    padding: 15px 30px 10px 50px;
    font-size: 30px;
    color: ${colors.secondary};

    @media only screen and (max-width: 768px) {
      padding: 15px 5px 10px 30px;
    }
`
const FormLogo = styled.img`
  width: 290px;

  @media only screen and (max-width: 768px) {
    width: 180px;
    height: 60px;
  }
`


function Blog() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.token) {
      navigate("/Unauthorized");
    }
  }, [navigate]);

    return (
      <div>
        <NavLink>
            <BlocLink>
            <FormLogo src={Logo} alt="Logo de l'entreprise Groupomania" />
            <Link to="/Profil"><List><CgProfile /></List></Link>
            <Link to="/Logout"><List><BiLogOut /></List></Link>
            </BlocLink>
        </NavLink>
        <PostCreate></PostCreate>
        </div>
    )
  }
export default Blog