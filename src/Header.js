import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='header'>
      <img
        src='https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg'
        className='header_logo'
      />

      <div className='header_adress'></div>
      <div className='header_search'>
        <input type="text" name="header_search_Input" id="" />
      </div>

      <div className='header_nav'>
        <div className='header_option'>
          <span
            className='header_optionLineOne'>
            Olá, Seja bem vindo!
          </span>
          <span
            className='header_optionLineTwo'>
            Contas e Listas
          </span>

        </div>
        <div className='header_option'>
          <span
            className='header_optionLineOne'>
            Devoluções
          </span>
          <span
            className='header_optionLineTwo'>
            & Pedidos
          </span>
        </div>

        <div className='header_option'>
          

        </div>

      </div>
      
    </div>
  )
};

export default Header;
