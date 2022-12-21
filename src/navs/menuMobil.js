



// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
const MenuMobil = ({show,handleClose,handleShow})=>{
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
        {/* <li className="nav-item">
        {[false].map((expand) => (<NavDropdown
                    title="Dropdown"
                    key={expand}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>))}
        
        </li> */}
        <li className="nav-item">
          <button className="nav-link " >Left Sidebar</button>
        </li>
        <li className="nav-item">
          <button className="nav-link " >Right Sidebar</button>
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