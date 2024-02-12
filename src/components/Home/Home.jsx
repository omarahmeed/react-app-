import React from 'react'
import style from"./Home.module.css"
import logo from"../../img/avataaars.svg"
export default function Home() {
  return<>
  <div className={`${style.home} text-center pb-5`}>

  <div className='d-flex justify-content-center pb-3'>

   <img className={`${style.img_style}`} src={logo} alt="" />
   </div>
   <div className="row">
    <h2 className={`${style.font_style}`} >START FRAMEWORK</h2>
   </div>
   <div className={`${style.widthh} row`}>
   <div className={style.design_parent}>
      <div className={style.design}></div>
      <i  className="fa-solid fa-star text-white"></i>
          <div className={style.design}></div>
      </div>
   </div>
   <span className='w-100 text-white '>Graphic Artist - Web Designer - Illustrator</span>

    
   
  </div>
  
  </>
}
