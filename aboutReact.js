What is JSX ?
JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.

//Code with JSX (JAVA SCRIPT XML)

const Hello =() =>{
return(
    <div className ='dummyClass'>
      <h1>Hello World </h1>
    </div>
      )
                 }
   
   
//Code without JSX 

const Hello =() =>{
return React.createElement('div',{id:'hello',className:'dummyClass'},React.createElement('h1',null,'Hello World')
                  }
                  
//-----------------------------------------------------------------------------------------------
    
/* JSX differences:
   ----------------
   class  => className
   for    => htmlFor
   
camelCase property naming convention
onclick => onclick
tabindex => tabIndex

Inline Style to write Css to React 
-----------------------------------
example
-------
import React from "react";
function Header() {
    return (
        <h1 style={{color:'red',fontSize:'20px',backgroundColor:"black"}}>Programming is my life</h1>
    );

}
export default Header;
   
Internal Style to write Css to React
------------------------------------
import React from "react";
function Header() {
    const style = {
        color: 'red',
        fontSize: '20px',
        backgroundColor: "black"
    }
    return (
        <h1 style={style}>Programming is my life</h1>
    );

}
export default Header;

External Style to write Css to React (same CSS)
------------------------------------
h1{
  color: red;
  font-size: 20px;
  background-color: black;
}
#root{
  background-color: blue;
}
! we must import css file to use all css Property

===============================================



import React from "react";
function Header() {
    const client = "Designer";
    const title = {
        designer: "Design",
        programmer: "Programming"
    }
    const info = {
        name: "moemen",
        nick:"saade"
    }
    // if (client === "Designer") {
    //     title = "Design is my life";
    // } else {
    //     title = "Programming is my life";
    // }
    return (
        <div className="navbar bg-dark rounded text-white">
            Hello {`${info.name} ${info.nick}`}
            <h1>
                {client === "Designer" ? title.designer : title.programmer} is my life</h1>
        </div>
    );

}
export default Header;



=======================================

import React from "react";
function Social() {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <input type="checkbox" id="facebook" />
                <label htmlFor="facebook">facebook</label>
            </li>
            <li className="list-group-item">
                <input type="checkbox" id="instagram" />
                <label htmlFor="instagram">instagram</label>
            </li>
            <li className="list-group-item">
                <input type="checkbox" id="You-tube" />
                <label htmlFor="You-tube">You-tube</label>
            </li>
        </ul>
    );

}
export default Social;




















                  
