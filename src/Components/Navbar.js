import React from 'react'
import '../StyleSheets/Navbar.css';
import witt from '../witt.png';


export const Navbar = (props) => {
    return (
      
        <div className="NavbarContainer">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
           
                <img id="logo" src={witt}/>
                <i id="hamburger" class="fa fa-bars fa-5x"> </i>
               
        </div>
    )
}

export default Navbar