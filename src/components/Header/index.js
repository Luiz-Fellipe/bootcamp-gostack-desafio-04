import React from 'react';

import './styles.css';
import facebook from '../../assets/Facebook.svg'

function Header(){
  return (
    <div className= "content-header">
      <img src="https://i.imgur.com/KDIDiSE.png"></img>
      <div className="perfil">
        <span>Meu perfil</span>
          <i className="material-icons">
              account_circle
          </i>
      </div>
    </div>
  )
}

export default Header;