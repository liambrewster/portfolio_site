import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';

function Footer() {
  return <footer className="text-center text-white" >
  <div className="justify-center pt-9" id="contact">
    <div className="flex justify-center mb-9">
      <a href="https://github.com/liambrewster" className="mr-9 text-gray-800">
        <FaGithub size="35px"/>
      </a>
      <a href="https://twitter.com/liambrewster" className="text-gray-800">
        <FaTwitter size="35px"/>
      </a>
    </div>
  </div>

  <div className="text-center text-gray-700 p-4" >
    © 2022 Copyright: 
    <a className="text-gray-800" href="https://lbhost.co.uk/"> Powered by LB Host</a>
  </div>
</footer>;
}

export default Footer;
