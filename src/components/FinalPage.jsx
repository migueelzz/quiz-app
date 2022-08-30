import React from 'react'
import Card from './Card'

import './FinalPage.css';

const FinalPage = ({
  score,
  setShowFinalPage,
  setShowStartingPage,
  topScore,
  setTopScore,
  setScore,
  username,
  setUsername,
}) => {

  const handleClick = () => {
    if(score > topScore) {
      setTopScore(score)
    }

    setShowFinalPage(false)
    setShowStartingPage(true)
    setScore(0)
    setUsername("")
  }

  return (
    <Card>
      <h1 className="heading">Parabéns, <span style={{color: '#8ec5fc'}}>{username}</span> você chegou à hora do jogo.</h1>
      <h3 className='primary_text'>Sua pontuação final:</h3>

      <h3 className="final_score">{score}</h3>
      <button className="play_again_btn" onClick={handleClick}>Jogar novamente</button>
    </Card>
  )
}

export default FinalPage