import React, { useState,useEffect,useRef } from 'react';
import {Link} from 'react-scroll'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Home() {
    const inputref=useRef()
    const[datas,setDatas]=useState({})
    const[number,setNumber]=useState('')
    const[value,setValue]=useState(1)

    useEffect(()=>{
        axios.get(`https://reqres.in/api/users/${value}`)
           .then((res)=>{
            setDatas({...res.data.data})
            console.log(datas)    
        })
        inputref.current.focus()
    },[value])

    const clickhandler=()=>{
        number<=12 ? (setValue(number)):(setValue(value))
        setNumber('')
        inputref.current.focus()
    }


  return (
    <div>        
        <div class="maincontainer">
       
          <div class="vertical-nav bg-white" id="sidebar">
            
            <div class="py-4 px-3 mb-4 bg-light">
            <div class=" d-flex flex-column align-items-center">
                <img src={datas.avatar} alt="img" width="185" class=" rounded-circle img-thumbnail " />
                <div >
                <h4 class="m-1">{datas.first_name} {datas.last_name}</h4>
                </div>
            </div>
            </div>
         
            
         
            <ul class="nav   bg-white " id='nav'>
             <li class="nav-item ">
                <Link  to="home" spy={true} smooth={true} offset={-350} duration={100} >
                  <a href="#" class="nav-link text-dark font-italic">
                      <i class="fa fa-cubes m-1 "></i>
                     Home
                  </a>
                </Link>
             </li>
             <li class="nav-item">
                <Link  to="contact" spy={true} smooth={true} offset={-350} duration={100} >
                  <a href="#" class="nav-link text-dark font-italic">
                      <i class="fa fa-cubes m-1 "></i>
                     Contact
                  </a>
                </Link>
             </li>
             <li class="nav-item">
                <Link  to="about" spy={true} smooth={true} offset={-350} duration={100} >
                  <a href="#" class="nav-link text-dark font-italic">
                      <i class="fa fa-cubes m-1 "></i>
                     About
                  </a>
                </Link>
             </li>
             <li class="nav-item">
                <Link  to="gallery" spy={true} smooth={true} offset={-350} duration={100} >
                  <a href="#" class="nav-link text-dark font-italic">
                      <i class="fa fa-cubes m-1 "></i>
                     Gallery
                  </a>
                </Link>
             </li>
           </ul>
          </div>
         
         <div className="page-content p-5" id="content">
          
            <div class="container">
                <h3>Search User</h3>
                <form action="/action_page.php" className="was-validated ">
                    <div class="mb-3 mt-3">
                        <input type="number" ref={inputref} class="form-control" value={number} onChange={e=>setNumber(e.target.value)} placeholder="Press key between 1-12" min="1" max="12" name="uname" required/>
                        <div class="valid-feedback">Valid.</div>
                        <div class="invalid-feedback">Invalid.</div>
                    </div>
                   <button type="submit" onClick={clickhandler} className="btn btn-success btn-outline-light">Search User</button>
                </form>
            </div>

           <div className="separator"></div>

           <div class="row text-white" id='home'>
            <h3 class='text-dark'>Home</h3><br/>
            <p class='text-dark'>Welcome to autobiography of Mr. {datas.first_name} {datas.last_name}.</p>
             <div class="col-lg-6">
               <p class="text-justify ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                 dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               <p class="text-justify ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                 dolor.
               </p>
             </div>
             <div class="col-lg-6">
               <p class="text-justify ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                 dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               <p class="text-justify ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                 dolor.
               </p>
             </div>
           </div>


           <div class="row text-white" id='contact'>
           <h3 class='text-dark'>Contact</h3><br/>
           <p class='text-dark'>you can contact <b>Mr. {datas.first_name} {datas.last_name}</b> at <b>{datas.email}</b></p>
             <div class="col-lg-6">
               <p class="text-justify ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                 dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               <p class="text-justify ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                 dolor.
               </p>
             </div>
             <div class="col-lg-6">
               <p class="text-justify ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                 dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               <p class="text-justify ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                 dolor.
               </p>
             </div>
           </div>

           <div class="row text-white" id='about'>
           <h3 class='text-dark'>About</h3><br/>
           <p class='text-dark'><b>Mr. {datas.first_name} {datas.last_name}</b> is a software engineer</p>
             <div class="col-lg-6">
               <p class="text-justify ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                 dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               <p class="text-justify ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                 dolor.
               </p>
             </div>
             <div class="col-lg-6">
               <p class="text-justify ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                 dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               <p class="text-justify ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                 dolor.
               </p>
             </div>
           </div>

           <div class="row text-white" id='gallery'>
           <h3 class='text-dark'>Gallery</h3><br/>
           <p class='text-dark'>please follow  Mr. {datas.first_name} {datas.last_name} social media account</p>
             <div class="col-lg-6">
               <p class="text-justify ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                 dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               <p class="text-justify ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                 dolor.
               </p>
             </div>
             <div class="col-lg-6">
               <p class="text-justify ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                 dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               <p class="text-justify ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                 dolor.
               </p>
             </div>
           </div>
         
         </div>
         </div>
    </div>
  )
}

export default Home