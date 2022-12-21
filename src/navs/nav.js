import React,{useState} from'react';
import MenuMobil from "./menuMobil";
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'component/modal';
import Sidebar from 'component/sideBar';
const Menu = ()=>  {
  const [show, setShow] = useState(false);
  const [canvasShow, setCanvaShow] = useState(false);
  const [sideShow, setSideShow] = useState(false);
  const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const CanvasClose = () => setCanvaShow(false);
const CanvaShow = () => setCanvaShow(true);

const sidesShow = (data) =>{
   setSideShow(data)
} ;
const SideClose = () =>{
  setSideShow({"opcion":sideShow?.opcion, "show":false});
  
} 
  return (
    <nav  className="navbar animate__animated animate__rubberBand" >
 
    <div className="container">
      <div className="navbar-brand " >
       <h3 className="title text-bold">Jc Academic</h3> 
      </div>
      <div className='navmobil'>
      <Navbar.Toggle   onClick={CanvaShow} />
      </div>
      
      
      
      <ul className="nav justify-content-center nav-pills navprincipal">
        <li className="nav-item">
          <button className="nav-link " >Welcome</button>
        </li>
        
        <li className="nav-item">
          <button onClick={() =>sidesShow({"opcion":"start", "show":true})} className="nav-link " >Left Sidebar</button>
        </li>
        <li className="nav-item">
          <button onClick={() => sidesShow({"opcion":"end", "show":true})} className="nav-link " >Right Sidebar</button>
        </li>
        <li className="nav-item">
          <button className="nav-link " onClick={handleShow} >No Sidebar</button>
        </li>
        <li className="nav-item">
        <Dropdown>
      <Dropdown.Toggle className="nav-link" id="dropdown-basic">
        Dropdown
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </li>
      </ul>

    </div>

    <Modal handleClose={handleClose} Show={show} />
    <MenuMobil sidesShow={sidesShow} handleShow={handleShow} show={canvasShow} handleClose={CanvasClose} />
    <Sidebar  close ={SideClose} handleShow={sideShow}/>
    
  </nav>
   
  );
}

export default Menu;