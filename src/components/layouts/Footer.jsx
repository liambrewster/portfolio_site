import React from 'react';
import { FaGithub, FaTwitter, FaLinkedinIn, FaFacebook, FaYoutube } from 'react-icons/fa';

function Footer() {
  return <footer className="text-center text-white" >
  <div className="justify-center pt-9" id="contact">
    <div className="flex justify-center mb-9">
      <a href="https://twitter.com/liambrewster" className="mr-7 text-gray-800">
        <FaTwitter size="35px"/>
      </a>
      <a href="https://github.com/liambrewster" className="mr-7 text-gray-800">
        <FaGithub size="35px"/>
      </a>
      <a href="https://www.linkedin.com/in/liambrewster/" className="mr-7 text-gray-800">
        <FaLinkedinIn size="35px"/>
      </a>
      <a href="https://www.facebook.com/LBWebHost" className="mr-7 text-gray-800">
        <FaFacebook size="35px"/>
      </a>
      <a href="https://www.youtube.com/channel/UCVEAr3LdCt8dMX19AqDRUIg" className="mr-7 text-gray-800">
        <FaYoutube size="35px"/>
      </a>
    </div>
  </div>

  <div className="text-center text-gray-700 p-4" >
    © Let's Not Pretend I Copyrighted this in 2022 : 
    <a className="text-gray-800 hover:text-lg" href="https://lbhost.co.uk/"> Powered by LB Host</a>
  </div>
</footer>;
}

export default Footer;
