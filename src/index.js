import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './main.css';
import Nav from './navs/nav';
import CardPrincipal from './card/cardPrincipal';
import CardImg from './card/cardImg';
import CardGrid from './card/cardGrig';
import Footer from 'navs/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <div  className='container'>
    <CardPrincipal />
    <CardImg />
    </div>
  
    <CardGrid />
    <Footer />
   
   
  </React.StrictMode>
);


