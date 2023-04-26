import React from 'react'
import { PLAYERS_NAMES } from '../Logic/Logic'

function MainContent(props) {
  return (
    <div>
    <div className='text-yellow-400 text-7xl text-center mt-40  p-10'>
       {
        props.word.split('').map((letter) => (props.guessedLetters.includes(letter) ? letter : '_')).join(' ')
       }
    </div>
    <div className=' text-yellow-400 text-7xl text-center mt-20  p-10'>
        <p>Intentos : {props.incorrectLetters}   maximo:  6</p>
    </div>
     

    </div>
  )
}

export default MainContent