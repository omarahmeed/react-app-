import { Link } from "react-router-dom";
import style from './Navbar.module.css'

export default function Navbar () {
    return <>
    
 <nav className= {style.navbar}>
    <div className="container">
        <div className={style.navbars}>

        <div>
           
            <Link className={`${style.text_decoration1}`} to="home">START FRAMEWORK</Link>

        </div>

        <ul className="d-flex justify-content-around w-25 text-white list-unstyled">
            <li> <Link className={style.text_decoration}  aria-current="page" to="about">ABOUT</Link></li>
            <li> <Link className={style.text_decoration}  aria-current="page" to="portfolio">PORTOFOLIO</Link></li>
            <li> <Link className={style.text_decoration}  aria-current="page" to="contacts">CONTACTS</Link></li>

        </ul>
        </div>
    </div>



 </nav>
    
    </>
}

 