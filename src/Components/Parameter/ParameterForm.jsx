import React ,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
 
import io from "socket.io-client";//import socket io

 const ParameterForm = (props) => {

  const [userName, setName] = useState("");
  const [ph, setPh] = useState("");
  const [ppm, setPpm] = useState("");
  const [comment, setComment] = useState("");

  var alertArray=["PPm value is greater then 2 and Ph is greater than 11","PPm value is greater then 2 and Ph is less than 6.5",
  "PPm value is greater then 2","Ph value is greater then 11","Ph value is less than 6.5"]

  var statuscodeArray=["red","red","red","red","red"];
  function alertDelegate(del,alertReportArray){
    if(ppm >2 && ph >11)
    {
      del(alertReportArray[0])
       
    }
    else if(ppm >2 && ph < 6.5)
    {
      del(alertReportArray[1])
       
    }

    else if(ppm >2)
    {
      del(alertReportArray[2])
       
    }

    
    else if(ph >11)
    {
      del(alertReportArray[3])
       
    }

    else if(ph <6.5)
    {
      del(alertReportArray[4])
       
    }

  }
   
  const navigate = useNavigate();//use navigate to redirect
  async function submitParams(e){
    e.preventDefault();
    // const url = 'http://localhost:4000/parameters';
    const url = 'https://parameterserver1.herokuapp.com/parameters';

    var statuscode=alertDelegate(evalStatus,statuscodeArray);

    const data=  {
      name: userName,
      ppm: ppm,
      ph:ph,
      cmt: comment,
      status:statuscode
  };
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
      }
  }
  
    // console.log("sdfdsfs");
     
  
  
    await fetch(url, options)
    .then(navigate(''))
    ;
    //

    function evalStatus(status){
      return status;

    }
    async function createAlerts(query){
      {
        const ppmdata=  {
          name: userName,
          ppm: ppm,
          ph:ph,
          query:query
       
      };
  
      const ppmoptions = {
        method: 'POST',
        body: JSON.stringify(ppmdata),
        headers: {
            'Content-Type': 'application/json'
        }
    }
  
    await fetch(emailUrl, ppmoptions)
    .then(res => res.json())
    ;
         
      }
    }

    

      //set email notifier for parameters that meet condition
    const emailUrl='https://parameterserver1.herokuapp.com/sendEmail'
    alertDelegate(createAlerts,alertArray);
  
  }

 
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