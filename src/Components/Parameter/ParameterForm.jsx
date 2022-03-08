import React ,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
 
import io from "socket.io-client";//import socket io

 const ParameterForm = (props) => {
   
  const navigate = useNavigate();//use navigate to redirect
  function submitParams(e){
    e.preventDefault();
    const url = 'http://localhost:4000/parameters';
    const data=  {
      name: userName,
      ppm: ppm,
      ph:ph,
      cmt: comment
  };
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
      }
  }
  
    // console.log("sdfdsfs");
     
  
  
    fetch(url, options)
    .then(navigate(''))
    ;
    //

      //set email notifier for parameters that meet condition
    const emailUrl='http://localhost:4000/sendEmail'
    if(ppm >2)
    {
      const ppmdata=  {
        name: userName,
        ppm: ppm,
        ph:ph
     
    };

    const ppmoptions = {
      method: 'POST',
      body: JSON.stringify(ppmdata),
      headers: {
          'Content-Type': 'application/json'
      }
  }

  fetch(emailUrl, ppmoptions)
  .then(res => res.json())
  ;
       
    }
  
  }
  const [userName, setName] = useState("");
  const [ph, setPh] = useState("");
  const [ppm, setPpm] = useState("");
  const [comment, setComment] = useState("");
 
    return ( 
        <div>
         
        <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input  id="User"   type="text" value={userName}
          onChange={(e) => setName(e.target.value)} />
              <label htmlFor="first_name">User</label>
            </div>
            <div className="input-field col s6">
              <input id="Ph"   type="number"
              value={ph}
              onChange={(e) => setPh(e.target.value)}
              />
              <label htmlFor="last_name">Ph</label>
            </div>
    
            <div className="input-field col s6">
              <input id="Ppm"  type="number"
                 value={ppm}
                 onChange={(e) => setPpm(e.target.value)}
              
              />
              <label htmlFor="last_name">Ppm</label>
            </div>
    
            <div className="input-field col s6">
              <input id="comment"   type="text"
               value={comment}
               onChange={(e) => setComment(e.target.value)}
              />
              <label htmlFor="last_name">Comment</label>
            </div>
          </div>
    
          <button className="btn waves-effect waves-light" type='submit' name='action' onClick={submitParams}> Add Parameter</button>
         
        </form>
      </div>
    
    
             </div>
         
    );
}
  
 export default ParameterForm;