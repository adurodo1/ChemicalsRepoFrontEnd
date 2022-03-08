//import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import { Alert } from 'react-bootstrap';
import ParameterList from './Parameter/ParameterList';
 
import ParameterForm from './Parameter/ParameterForm';
import Nav from './Nav';
import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import io from "socket.io-client";//import socket io

//import $ from 'jquery'
 


function App() {
 
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


///For socket io
///For socket IO
const [socket, setSocket] = useState(null);//state established for socket
const [socketConnected, setSocketConnected] = useState(false);//state established for connection status
const [alert, setAlert] = useState(null);
 
// establish socket connection
 useEffect(() => {
  setSocket(io('http://localhost:4000'));//io will return an io object
  console.log(socket);
}, []);//automaticaaly runs on page load, behind the scenes

  // subscribe to the socket event
  useEffect(() => {
    if (!socket) return;
 //remeber socket was established on the previous useeffect by setSockey
 //hence it should be no longer null if successfull
    socket.on('connect', () => {
      console.log("connected")
      setSocketConnected(socket.connected);
      subscribeToAlertEvent();
      console.log("Subscribed")
    });
    socket.on('disconnect', () => {
      setSocketConnected(socket.connected);
    });

    socket.on("AlertEvent", data => {
      setAlert(data.alert);
      console.log(data.alert.name)
    });
 
  }, [socket]);//this use effect triggers whenever socket changes

  // const handleSocketConnection = () => {
  //   if (socketConnected)
  //     socket.disconnect();
  //   else {
  //     socket.connect();
  //   }
  // }

  // subscribe to Alert  event
const subscribeToAlertEvent = () => {
  socket.emit('subscribeToAlertEvent');
}

///Coding for Alert

const [show, setShow] = useState(false);
let alertInfo={};
 useEffect(() => {
   alertInfo=alert;
   setShow(true)
   setAlert(null);
 }, [show]);

//
 
if(loading) return <h1>loading</h1>
if(!info)
return null
 if(info )
  return (
    <>
 

  <Router>
 
  <div className="App">
  <div className='container-fluid'>
  <Nav/>
{(!alert)?"":(   <Alert    variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Parameter value exceed Limit.
          
         <p>Entered by :{alert.name}</p> 
         <p>PPm  :{alert.ppm}</p>
         <p>Ph by :{alert.ph}</p>
         
        </p>
      </Alert>)}
 

  <Routes>
   <Route path="/form" element={<ParameterForm/>} />
   <Route path="/list" element={<ParameterList/>} />

   <Route path="/" element={<ParameterList/>} />


   </Routes>
    </div>

  </div>

 
  </Router>


 
    </>
  );
}

export default App;
