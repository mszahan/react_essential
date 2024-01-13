import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

// we can create another app apptwo and render at the same time
// function AppTwo(){
//   return <h1>This is the second app </h1>
// }

// to render two or more app simultanuously,
// you need to wrap apps within a div or empty elements
// or in a element called <React.Fragment>
// ReactDOM.render( 
//   <>
// <App />
// <AppTwo/> 
//   </>,
// document.getElementById('root'));

ReactDOM.render( 
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
