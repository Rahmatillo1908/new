import React from 'react'
import './Footer.scss'
import { BsGithub, BsInstagram, BsTelegram } from 'react-icons/bs'
import { BiPhone } from 'react-icons/bi'
import { SiNetlify } from "react-icons/si";
function Footer() {
  return (
    <div className='footer'>
      <h2>Rahmatillo's <span className='bg-orange px-2' >FastEat.</span> online store</h2>
      <p>thank you for your time</p>
      <div className='icons' >
        <a target='_blank'  href="https:/t.me/Rahmatillo1908"><BsTelegram /></a>
        <a target='_blank'  href='https://www.instagram.com/rahmatillo4590/'><BsInstagram /></a>
        <a target='_blank'  href='https://app.netlify.com/teams/rahmatillo722022/overview'><SiNetlify /></a>
        <a target='_blank'  href='https://github.com/Rahmatillo1908'><BsGithub /></a>
        <a target='_blank' href='tel:+998903434590'><BiPhone/></a>
      </div>
    </div>
  )
}

export default Footer