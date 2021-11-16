import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function Header() {
  return (
    <div className='header'>

      {/* logo with localization */}
      <div className='header_logo'>
        <img className='header_logo_img'
        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        alt='Amazon-logo'
        />
        <div className='header_logo_text'>
          .com.br
        </div>
      </div>

      {/* adress */}
      <div className='header_adress'>
        
        <LocationOnOutlinedIcon
        className='header_adressLocationIcon' />
      
        <div className='header_option header_adressText'>

          <span
            className='header_optionLineOne'>
            Olá
          </span>
        
          <span
            className='header_optionLineTwo'>
            Selecione o endereço
          </span>
        
        </div>
      </div>


      {/* search bar */}
      <div className='header_search'>
        <input
          type="text"
          className="header_search_input"
        />
        <SearchIcon
        className='header_search_icon' />
      </div>

      {/* other selections */}
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

      </div>


      {/* Shopping cart */}

      <div className='header_shoppingCart'>
        <ShoppingCartOutlinedIcon />
        <span
          className='header_optionLineTwo header_shoppingCartCounter'>0
        </span>
      </div>
      
    </div>
  )
};

export default Header;
