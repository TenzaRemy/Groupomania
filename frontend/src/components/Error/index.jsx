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

function Error() {
    return (
    <div>
        <ErrorTitle>Erreur 404</ErrorTitle>
            <ErrorText>La page que vous souhaitez est introuvable</ErrorText>
                <ErrorSubtitle>Pour retourner sur la page d'accueil, veuillez cliquer sur le logo ci dessous</ErrorSubtitle>         
        <Link to="/"><LogoError src={ErrorImg} alt="Logo de l'entreprise Groupomania" /></Link>
    </div>
    )
}

export default Error