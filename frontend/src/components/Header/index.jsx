import colors from '../../utils/style/colors'
import styled from 'styled-components'
import Logo from '../../assets/icon-left-font-removebg.png'
import { Link } from 'react-router-dom'

const FormLogo = styled.img`
  width: 370px;
  height: 100px;
  `
const NavLink = styled.nav`
  width: 100%;
  background-color: ${colors.tertiary};
  display: flex;
  justify-content: space-between;
  box-shadow: 5px 5px 10px 5px lightgray;
`
const ListLog = styled.ul`
  display: flex;
`

const List = styled.li`
  padding: 20px;
  margin: 5px 25px 5px 5px;
  font-size: 20px;
  border: 2px solid ${colors.tertiary};
  border-radius: 20px;
  background-color: ${colors.primary};
  color: black;
`


function Header() {
    return (
      <NavLink>
        <FormLogo src={Logo} alt="Logo de l'entreprise Groupomania" />
        <ListLog>
        <Link to="/errr"><List>Se connecter</List></Link>
        <Link to="/errr"><List>S'inscrire</List></Link>
        </ListLog>
      </NavLink> 
    )
  }

  
export default Header