
import React,{useState} from 'react';
const CardPrincipal =()=>{
   
 const [animacion,setAnimacion] = useState(" ")
 const [animacion2,setAnimacion2] = useState(" ")
    return(<>
    <div  className="card text-center mt-4">
       
        <div className="card-body">
            <div className="row">
                <div className="col-6">
                <h1 className="left ff animate__animated animate__bounce">Hi. This is Lorem.</h1>
                <h4 className="left text-muted ff">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in
                </h4>
                </div>
                <div className="col-6">
                <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
        <button onMouseLeave={()=>setAnimacion(" ")} onMouseEnter={()=>setAnimacion("animate__animated animate__bounce animate__repeat-1")} type="button"  className={`btn btn-primary ff btn-lg d-flex justify-content-between` }>
            <div className={`text-bold ${animacion}`} > Ok lest's go  <i className="bi bi-arrow-right"></i>
            </div> </button>
        <button onMouseLeave={()=>setAnimacion2(" ")} onMouseEnter={()=>setAnimacion2("animate__animated animate__shakeX animate__repeat-1")} type="button" className="btn btn-light mt-2 ff btn-lg text-bold">
        <div className={`text-bold ${animacion2}`} > More info   <i className="bi bi-question"></i>
            </div>
           
            </button>
 
                </div>

                </div>

            </div>
          
        </div>
       
      </div>
    </>)

}
export default CardPrincipal;