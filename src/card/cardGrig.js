import pic07 from "img/pic07.jpg";
import pic06 from "img/pic06.jpg";
import pic05 from "img/pic05.jpg";
import pic04 from "img/pic04.jpg";
import React,{useState} from 'react';
const CarGrig = ()=>{
    const [animacion2,setAnimacion2] = useState(" ")
    const [animacion,setAnimacion] = useState(" ")
return(<>
<div className="container-fluid mt-4">
<div className="card">

<div className="card-body">
    
    <div className="row mt-4">
        <div className="col-sm-12 col-md-4">
        <div className="row ">
        <h5 className="text-bold">Interesting stuff</h5>
            <div className="col-sm-6 contenedor">
            <div className="card mt-4 "  >
        <img src={pic07} className="card-img-top img-fluid imagen" alt="..." />
        
      </div>
            </div>
            <div className="col-sm-6 contenedor">
            <div className="card mt-4 "  >
        <img src={pic06} className="card-img-top img-fluid imagen" alt="..." />
        
      </div>
            </div>
            <div className="col-sm-6 contenedor">
            <div className="card mt-4 "  >
        <img src={pic05} className="card-img-top imagen" alt="..." />
        
      </div>
            </div>

            <div className="col-sm-6 contenedor">
            <div className="card mt-4 "  >
        <img src={pic04} className="card-img-top imagen" alt="..." />
        
      </div>
            </div>

            <div className="col-6">
            <div className="card mt-4" >
        <button 
        onMouseLeave={()=>setAnimacion2(" ")} 
        onMouseEnter={()=>setAnimacion2("animate__animated animate__jello animate__repeat-1")} 
        className="btn btn-primary text-bold ">
    
        <div className={`text-bold ${animacion2}`} > <i className="bi bi-card-list"></i> More   
      </div>
        </button>
        
      </div>
            </div>
           

        </div>
        </div>

        <div className="col-sm-12 col-md-8 animate__animated animate__backInRight">
        <h3 className="card-title text-bold">Special title treatment</h3>
  <p className="card-text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las 
  industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro 
  de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de 
  las hojas "Letraset", 
  las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum
  <br/>
  <br/>
  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las 
  industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro 
  de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de 
  las hojas "Letraset", 
  las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum</p>
  <button 
        onMouseLeave={()=>setAnimacion(" ")} 
        onMouseEnter={()=>setAnimacion("animate__animated animate__rubberBand animate__repeat-1")} 
        className="btn btn-primary text-bold ">
    
        <div className={`text-bold ${animacion}`} > <i className="bi-arrow-right"></i>  Continue Reading   
      </div>
        </button>

        </div>

    </div>
  
</div>
</div>
</div>
</>)
}
export default CarGrig;