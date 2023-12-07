import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Obtene codigos de descuento, noticias y mas</h1>
      <p>unicamente en nuestro mewsletter</p>
      <div>
        <input type="email" placeholder='Correo electronico' />
        <button>Subscribirme</button>
      </div>
    </div>
  )
}

export default NewsLetter
