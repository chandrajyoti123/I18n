import React, { lazy, useState } from 'react'
import loadlan from './../../utils/i18n.js'
import './Home.css'

export default function Home() {
    const [lan, setLan]=useState("en")
    const studentcount=30;
  return (

    <div className='container'>
       <div className='main-heading'> {loadlan('topic')}</div>
       <div className='para'>{loadlan('paraone')}</div>
       <div className='para'>{loadlan('paratwo')}</div>
       <div className='subheading'>{loadlan('heading')}</div>
       <ul>
        <li>{loadlan('keyone')}</li>
        <li>{loadlan('keytwo')}</li>
        <li>{loadlan('keythree')}</li>
       </ul>
    
    
   

      <select value={lan} onChange={(e)=>{
      setLan(e.target.value)
      localStorage.setItem("lan",e.target.value)
      // window.location.reload(); 
      

    }} className='dropdown'>
      <option value={"en"}>English</option>
      <option value={"hi"}>hindi</option>
      <option value={"mar"}>marathi</option>
    </select> 
  </div>
    // <div>
    //   <h1>{loadlan('greet')}</h1>
    //   <h1>{loadlan('message' ,'<studentcount>',studentcount)}</h1>
    //   <h1></h1>




    //   <select value={lan} onChange={(e)=>{
    //     setLan(e.target.value)
    //     localStorage.setItem("lan",e.target.value)
    //     // window.location.reload();

    //   }}>
    //     <option value={"en"}>English</option>
    //     <option value={"hi"}>hindi</option>
    //     <option value={"mar"}>marathi</option>
    //   </select>
    // </div>
  )
}
