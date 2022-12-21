import pic01 from "img/pic01.jpg";
import pic02 from "img/pic02.jpg";
import pic03 from "img/pic03.jpg";
const CardImg = ()=>{
    return (
        
        <>
        <div className="row ">
            <div className="col-sm-12 col-md-4 contenedor">
            <div className="card mt-4 " >
              
        <img src={pic03} className="card-img-top  imagen" alt="..." />
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
            </div>
            <div className="col-sm-12 col-md-4 contenedor">
            <div className="card mt-4" >
        <img src={pic01} className="card-img-top imagen" alt="..." />
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
            </div>

            <div className="col-sm-12 col-md-4 contenedor">
            <div className="card mt-4" >
        <img src={pic02} className="card-img-top imagen" alt="..." />
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
            </div>
        </div>
        </>)
}
export default CardImg;