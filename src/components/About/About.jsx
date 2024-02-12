import style from './About.module.css'



export default function About() {
  return (
    <>
    <section className={style.about_page}>
      <div className={style.fullpage}>
      <div className="container">
        <div className="  d-flex flex-column justify-content-center align-items-center  h-100">
          <h1 className="text-white">ABOUT COMPONENT</h1>
      <div className={style.design_parent}>
      <div className={style.design}></div>
      <i  className="fa-solid fa-star text-white"></i>
          <div className={style.design}></div>
      </div>


         <div className="container">

         <div className="row px-5">
            <div className="col-md-6">
              <p className="text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p className="text-white">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
         </div>
        </div>
      </div>
      </div>
      </section>
    </>
  );
}
