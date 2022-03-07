import React from 'react';
import home from '../assets/home.png'

export default function Home() {
  return (
    <div className='home'>
        <div className='container'>
            <div className='content'>
                <p className='sub-title'>Multi Cable Services</p>
                <h1 className='title'>Stream Play TV</h1>
                <p className='description'>Obtén el mejor servicio de TV paga a nivel nacional, con mas +450 canales entre todos nuestros paquetes, contamos con la mejor programación en cuanto a Deportes, infantiles, series, películas y Tv shows. Lo mejor de todo es que contamos con full alta definición 4k en todos nuestros servicios, sin costos escondidos, Sin duda los mejores beneficios a un excelente precio.</p>
                <button>Shop Now</button>
            </div>
            <div className='image-container'>
                <div className='image'>
                    <img src={home} alt="home" />
                </div>
                <div className='ellipse-container'>
                    <div className='ellipse pink'></div>
                    <div className='ellipse pink'></div>
                    <div className='ellipse orange'></div>
                    <div className='ellipse orange'></div>
                </div>
            </div>
        </div>
        <div className='tituloContainer'>
            <div className='text'>
            <span className='text1'>Nuestros Paquetes</span>
            <span className='text2'>Mas Opciones de Ahorro</span>
            </div>
        </div>
    </div>
  )
}
