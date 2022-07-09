import styled from "styled-components"
import colors from '../../utils/style/colors'
import ErrorImg from '../../assets/icon-left-font-monochrome-black.png'
import { Link } from 'react-router-dom'

const ErrorTitle = styled.h1`
    color: ${colors.primary};
    font-size: 62px;
    text-align: center;
    `
const ErrorText = styled.h2`
    text-align: center;
    color: ${colors.tertiary};  
    `
const ErrorSubtitle = styled.h3`
    text-align: center;
    `
const LogoError = styled.img`
    width: 230px;
    height: 230px;
    position: absolute;
    right: 41%;
    `

function Unauthorized() {
    return (
    <div>
        <ErrorTitle>Erreur 401</ErrorTitle>
            <ErrorText>La page que vous souhaitez est innaccessible. Pour obtenir l'accès veuillez d'abord vous connecter !</ErrorText>
                <ErrorSubtitle>Cliquez sur le logo ci dessous pour retourner sur la page de connexion.</ErrorSubtitle>         
        <Link to="/"><LogoError src={ErrorImg} alt="Logo de l'entreprise Groupomania" /></Link>
    </div>
    )
}

export default Unauthorized