

function Form() {
    return (
      <form>
        <h1>Connecter vous !</h1>
          <input type="text" placeholder="Email" name="email"/>
          <input type="password" placeholder="Mot de Passe" name="password"/>
          <button type="submit">Se connecter</button>
      </form>
    )
  }

  
export default Form