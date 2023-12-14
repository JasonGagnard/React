import React, { useState } from 'react';

const InscriptionPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptConditions, setAcceptConditions] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    // Vérification si l'utilisateur a accepté les conditions
    if (!acceptConditions) {
      alert("Veuillez accepter les conditions pour vous inscrire.");
      return;
    }

    // Ici, vous pouvez implémenter la logique d'inscription
    console.log('Email:', email);
    console.log('Mot de passe:', password);
    console.log('Conditions acceptées:', acceptConditions);
    // Vous pouvez ajouter ici la logique d'appel API pour l'inscription, le stockage des informations, etc.
  };

  return (
    <div>
      <h2>Page d'Inscription</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <div>
          <label>
            <input
              type="checkbox"
              checked={acceptConditions}
              onChange={(e) => setAcceptConditions(e.target.checked)}
            />
            J'accepte les conditions d'utilisation.
          </label>
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default InscriptionPage;
