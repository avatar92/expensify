import React from 'react';
import ReactDom from 'react-dom'; 

const Info=(props)=>(
  <div>
    <h1>Info</h1>
    <p>the info is :{props.info}</p>
  </div>
);

const withAdminWarning=(WrappedComponent)=>{
  return(props)=>(
    <div>
      {props.isAdmin&&<p>this is private info please dont share</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuthentication=(WrappedComponent)=>{
  return(props)=>(
    <div>
     {props.isAthenticated?<WrappedComponent {...props}/>:<p>please try to login</p>}
    </div>
  );
};

const AdminInfo =withAdminWarning(Info);
const AuthInfo =requireAuthentication(Info);

//  ReactDom.render(<AdminInfo isAdmin={false} info="these are the info"/>,document.getElementById('app'))
ReactDom.render(<AuthInfo isAthenticated={true} info="these are the info"/>,document.getElementById('app'))
