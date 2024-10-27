import React from 'react'
import TicTacToe from '../Components/Tic_Tac_Toe/TicTacToe'
import TicTacContextComponent from '../Components/Tic_Tac_Toe/TicTacContextComponent'

const TicTackPage = () => {
  return (
    <TicTacContextComponent>
      <TicTacToe/>
    </TicTacContextComponent>
  )
}

export default TicTackPage
