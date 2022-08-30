import React from 'react';
import Card from './Card';

import './StartingPage.css';

  const StartingPage = ({
    setShowStartingPage,
    setShowQuestionsPage,
    topScore,
    username,
    setUsername,
  }) => {

  const startGame = () => {
    if(username.trim().length > 0) {
      setShowStartingPage(false);
      setShowQuestionsPage(true);
    }
  };

  return (
    <Card>
      <h1 className="header">Bem-vindo ao Quiz Game!</h1>
      <h3 className="primary_text">Por favor digite seu nome.</h3>
      <input 
        type="text" 
        className='username_input' 
        placeholder="Nome de usuário" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="start_btn" onClick={startGame}>
        Começar
      </button>
      <p className="top_score">
        Melhor pontuação: <span>{topScore}</span>
      </p>
    </Card>
  )
}

export default StartingPage