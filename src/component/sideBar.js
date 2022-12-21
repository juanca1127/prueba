import React from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasExample({ name,show,close, ...props }) {


  return (
    <>
      
      <Offcanvas show={show} onHide={close} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Side {name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         Todo lo que se pidan se puede realizar con un poco de esfuerzo y dedicacion,

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}





const Sidebar = ({handleShow,close})=>{
return(<>
 <>
      {[handleShow?.opcion].map((placement, idx) => (
        <OffCanvasExample key={idx} show={handleShow.show} close={close} placement={placement} name={placement} />
      ))}
    </>   
 
</>)
}
export default Sidebar;