import React from 'react';
import ReactDOM from 'react-dom/client';
// import FileUpload from './App';
// import  App from './App';
// import Get from './Backend/get';
import Post from './Backend/post';
import SignUp from './Backend/signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignUp />
    <Post />
    {/* <Get /> */}
    {/* <App /> */}
    {/* <FileUpload /> */}
  </React.StrictMode>
);
 
 
