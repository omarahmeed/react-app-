import style from './Contacts.module.css'

function Contacts() {
    return <>
     
   <section className='mb-5 mt-5'>

    <div className="d-flex flex-column justify-content-center align-items-center  " >
   <div>
   <h2 className={style.font_sizes}>  CONATCT SECTION </h2>
   <div className={style.design_parent}>
      <div className={style.design}></div>
      <i  className={`${style.icolor} fa-solid fa-star`}></i>
          <div className={style.design}></div>
      </div>
 
   </div>
       
       <form className={style.forms}>

        <div className="d-flex flex-column justify-contnet-center align-items-center">
      <label id='label' className='d-none  ' htmlFor="UserName">userName:</label>
<input onInput={showLabel} className="form-control border-0 border-bottom w-50  py-3 mb-2" type="text" placeholder="UserName" />

<label id='labell' className='d-none' htmlFor="UserAge">UserAge:</label>
<input onInput={showLabell} className="form-control border-0 border-bottom  w-50 py-3 mb-2" type="text" placeholder="UserAge" />

<label id='labelll' className='d-none' htmlFor="UserEmail">UserEmail:</label>
<input onInput={showLabelll} className="form-control border-0 border-bottom w-50 py-3 mb-2" type="text" placeholder="UserEmail" />

<label id='labellll' className='d-none' htmlFor="UserPassword">UserPassword:</label>
<input onInput={showLabellll} className="form-control border-0 border-bottom w-50 py-3 mb-2" type="text" placeholder="UserName" />
<div className={style.buttton}>
<button className="btn btn-info  ">submit</button>
</div>
</div>

       </form>

    </div>
    
    

    
    
    </section> 
    
    </>;

function showLabel() {
    document.getElementById('label').classList.remove('d-none')

    
}
function showLabell() {
    document.getElementById('labell').classList.remove('d-none')

    
}
function showLabelll() {
    document.getElementById('labelll').classList.remove('d-none')


}
function showLabellll() {
    document.getElementById('labellll').classList.remove('d-none')

    
}









}

export default Contacts;