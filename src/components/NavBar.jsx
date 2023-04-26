import React from 'react'

function NavBar() {
  return (
    <div className='flex justify-center items-center w-full '>
     <div className='text-center text-5xl text-yellow-300 mt-10'>Adivina el jugador de Boca</div>
     <img src='/imgs/boca.png' alt='Boca' className='w-10 h-10 absolute right-96 top-10' style={{ zIndex: 1 }} />
  </div>
  
  
  )
}

export default NavBar