



// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
const MenuMobil = ({show,handleClose,handleShow,sidesShow})=>{
    return (
    <>
    <Offcanvas show={show} onHide={handleClose}>
          
              <Offcanvas.Header closeButton>
                
              </Offcanvas.Header>
              <Offcanvas.Body>
              <ul className="nav  nav-pills ">
        <li className="nav-item">
          <button className="nav-link " >Welcome</button>
        </li>
        
        <li className="nav-item">
          <button onClick={() =>sidesShow({"opcion":"start", "show":true})} className="nav-link " >Left Sidebar</button>
        </li>
        <li className="nav-item">
          <button onClick={() =>sidesShow({"opcion":"end", "show":true})} className="nav-link " >Right Sidebar</button>
        </li>
        <li className="nav-item">
          <button className="nav-link " onClick={handleShow} >No Sidebar</button>
        </li>
      </ul>
               
              </Offcanvas.Body>
            
              </Offcanvas> 
        

        </>);

}
export default MenuMobil;