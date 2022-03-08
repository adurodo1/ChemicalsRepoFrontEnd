import React from 'react';
const ParameterSingle = (props) => {
    return ( 
     <>
 
     <div className='container-fluid right'>
        <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{!props.Param?"":props.Param.ph}</span>
              <p> This will not trigger an alert.</p>
            </div>
            
          </div>
        </div>
      </div>
      </div>
      </>
         
    );
}
 
export default ParameterSingle;