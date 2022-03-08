import React,{useState,useEffect}  from "react";
import ParameterList from "./Parameter/ParameterList";
import ParameterSingle from './Parameter/ParameterSingle';
import ParameterForm from './Parameter/ParameterForm';
import App from "./App";

export function Home(){

    const [info, setParams]=useState(null);
    const[loading, setLoading]=useState(false);
    const[error,setError]=useState(null);
    const [clickedParams, setClickedParams]=useState(null);
  
  //view and update parameters
  
   function viewAndUpdateParams(params)
   {
    setClickedParams(params);
    //alert("clicked");
    console.log(params);
    console.log(clickedParams);
   }
   
  useEffect( () => {
   
  setLoading(true)
    fetch(`http://localhost:4000/parameters`, {
      "method": "GET",
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
  }).then((response)=>response.json()).then(setParams).then(()=>{setLoading(false)}).then(console.log(info)).catch(setError);
  
  },[error]);
  if(loading) return <h1>loading</h1>
  if(!info)
  return null
   if(info )
    return(
       
        <div className="App">
        <div className='container-fluid'>
            <div className='row'>
            <nav>
      <div className="nav-wrapper blue darken-1">
        <a href="#" className="brand-logo">Params App</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
           
        </ul>
      </div>
    </nav>
            </div>
            <div className='row'>
              
              <div className='col s9'><ParameterList ParamsList={info} clicked={viewAndUpdateParams}/></div>
             
               <div className='col s6'><ParameterSingle Param={clickedParams} /></div>
               <div className='col s12'><ParameterForm /></div>
            </div>
        </div>
      </div>
    );

}

export function About(){
    return(
        <div></div>
    );
    
}

export function ParameterCriteria(){
    return(
        <div></div>
    );
    
}

export function EnterParameter(){
    
}