
import style from './Footer.module.css'

function Footer() {
    return <>
    <footer className=" text-white   ">
        <div className={style.foter}>
<div className="container ">
<div className="row ">
    
<div className="col-md-4  mt-5 pt-5">
    <div className="d-flex flex-column align-items-center ">
        <h2 className={`${style.font_size}`}>LOCATION</h2>
        <h3 className='h6'>omar ahmed amin </h3>
     <h4 className='h5'>Helwan, cairo, egy</h4>

    </div>
</div>
<div className="col-md-4 mt-5 pt-5">
    <div className="d-flex flex-column align-items-center">
        <h2 className={`${style.font_size}`}>AROUND THE WEB</h2>


        <div>
            <i  className={`${style.border_color} fa-brands  fa-facebook mx-1`} ></i>
            <i className={`${style.border_color} fa-brands  fa-twitter mx-1`} ></i>
            <i className={`${style.border_color} fa-brands  fa-linkedin mx-1`} ></i>
            <i className={`${style.border_color} fa-solid  fa-globe mx-1`} ></i>

        </div>
 

    </div>
</div>
<div className="col-md-4 mt-5 pt-5">
    <div className="d-flex flex-column align-items-center">
        <h2 className={`${style.font_size}`}>ABOUT FREELANCER</h2>
    <p className='text-center '>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
     


    </div>
</div>


</div>

</div>

</div>
<div className={style.fotter_lfotter}>
    <h5 className='text-center'>Copyright © Your Website 2021</h5>
</div>

    </footer>
    
    
    
    
    </>;
}

export default Footer;