import React from 'react'
import {BsGithub}from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"

const Links = () => {
  return (
    

        <div className="bg-white z-50 text-5xl flex fixed top-20 right-0 lg:mr-72  w-36 md:mr-28 shadow-lg shadow-gray border border-gray rounded-full justify-around p-4 ">
        <a rel="noreferrer" href="https://github.com/gowreemanohar">
        <BsGithub color="#3085ee"/>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/bandla-sri-gowree-manohar/">
        <BsLinkedin color="#3085ee"/>
        </a>
        </div>
  )
}

export default Links