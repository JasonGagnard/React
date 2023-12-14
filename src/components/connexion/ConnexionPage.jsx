import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ConnexionPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Ici, vous pouvez mettre la logique de connexion (appel API, vérification des informations, etc.)
    console.log('Username:', username);
    console.log('Password:', password);
    // Vous pouvez implémenter la logique de connexion ici et rediriger l'utilisateur vers une autre page si la connexion est réussie
  };

  //   const handleSignUp = () => {

  //     // Ajoutez ici la logique pour rediriger l'utilisateur vers la page d'inscription
  //     console.log("Rediriger vers la page d'inscription");
  //   };

  return (
    <div>
      <h2>Page de Connexion</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Email :</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" >Se Connecter</button>
      </form>
      <Link to="/inscription">S'inscrire</Link>
      {/* <button onClick={handleSignUp}>S'inscrire</button> */}
    </div>
  );
};

export default ConnexionPage;
