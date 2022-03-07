import React from 'react'
import icon from '../assets/icon.png'
import pago from '../assets/pagoSeguro.png'

export default function TablaPrecios() {
  return (
    <div className='free'>

      <div className='container'>
        <div className='background'>
          <div className='ellipse blue'></div>
          <div className='ellipse green'></div>

        </div>
        <div className='content'>
          <div className='image'>
            
          </div>
          <h2 className='title'>Latino Ultra Pre-Pagado</h2>
            <p className='subTitulo'>31 dias de increible y amplio contenido, con un excelente precio fijo muy por debajo de todas la compañias de cable y streaming tradicionales.</p>
            <button className='boton'>Shop Now</button>
        </div>
        <div className='canales'> 
          <h1>1,000+</h1> <h3 className='frase2'>Canales</h3> <a href="#" className='textoBoton'>Ver Contenido</a>
         </div>

         <div className='precio'>

           <h2 className='mensualidad'>30.00</h2>
           <p className='subMensualidad'>/Servicio Prepagado mes a mes</p>

         </div>

        <div className='paypal'>
              <img src={pago}	 alt="pago" />
            </div>
      </div>
      
      <div className='container2'>
        <div className='background'>
          <div className='ellipse blue'></div>
          <div className='ellipse green'></div>

        </div>
        <div className='content'>
          <div className='image'>
            
          </div>
          <h2 className='title'></h2>
            <p></p>
        </div>
      </div>

      <div className='container2'>
        <div className='background'>
          <div className='ellipse blue'></div>
          <div className='ellipse green'></div>

        </div>
        <div className='content'>
          <div className='image'>
            <img src={icon} alt="icon" />
          </div>
          <h2 className='title'></h2>
            <p></p>
        </div>
      </div>

      <div className='container3'>
        <div className='background'>
          <div className='ellipse blue'></div>
          <div className='ellipse green'></div>

        </div>
        <div className='content'>
          <div className='image'>
            <img src={icon} alt="icon" />
          </div>
          <h2 className='title'></h2>
            <p></p>
        </div>
      </div>

      <div className='card1'></div>
      <div className='card2'></div>
    </div>
  )
}
