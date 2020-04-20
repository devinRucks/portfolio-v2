import React from 'react'
import '../styling/normalProjectLayout.scss'
import stockapp from '../media/stockapp-showcase.png'

const NormalProjectLayout = () => {
     return (
          <div id="normal-project-layout-container">
               <section id="showcase-container">
                    <img className="image" alt="" src={stockapp}></img>
                    <div className="image-overlay"></div>
               </section>
               <section id="info-container">

               </section>
          </div>
     )
}

export default NormalProjectLayout