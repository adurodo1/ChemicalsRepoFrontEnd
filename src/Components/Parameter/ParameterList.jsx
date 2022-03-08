import React from 'react';
import {useState,useEffect} from 'react';
const ParameterList = (props) => {

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

return ( 
<div>
        <table className='collection with-header stripped'>
            <thead>
              <tr>
                <th>User</th>
                <th>Full Date</th>
                <th>Ph</th>
                <th>Cu_ppms</th>
                <th></th>

                </tr>
            </thead>
  {
    info.map((data,id)=>
   (
   
   <tbody  key={data._id}>  
  <tr> 
   <td className='collection-header'>{data.name}</td>
   <td className='collection-header'>{data.created_date}</td>
   <td className='collection-header'  >{data.ph}</td>
   <td className='collection-header' >{data.ppm}</td>
  <td className='collection-header'> <a href="#!" onClick={()=>viewAndUpdateParams(data)}  >view</a></td>


  </tr>
  
    </tbody>
    
    )
    )


    } 
</table>
</div>
     );


 



}
 
export default ParameterList;