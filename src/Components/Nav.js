import React from "react";
import { Link} from "react-router-dom";
import ParameterList from './Parameter/ParameterList';
import ParameterSingle from './Parameter/ParameterSingle';
import ParameterForm from './Parameter/ParameterForm';

/*
<div className='row'>
<div class="navbar-fixed">
          <nav>
    <div className="nav-wrapper blue darken-1">
      <a href="#" className="brand-logo">Params App</a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>

      <ul  className="right hide-on-med-and-down">

      <li><Link to="/Form">Create</Link> |{" "}</li>
        <li> <Link to="/List">View All</Link>|{" "}</li>
        <li><Link to="/ParameterSingle">Enter New</Link>|{" "}</li>
         
      </ul>
    </div>
  </nav>



</div>
  <ul className="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>
  </div>

*/

function Nav(){


    return(
        
<>
        <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">Logo</a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><Link to="list">Home </Link> </li>
            <li><Link to="form">Form </Link> </li>
          
          </ul>
        </div>
      </nav>
    
      <ul className="sidenav" id="mobile-demo">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>


</>
 
          
  
    );

}

export default Nav;