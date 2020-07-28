import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/logo_texto_azul_claro_wide.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://marianafmedeiros.github.io/">
        <img style = {{ width: '15%', height: "15%" }} 
            src= {Logo} 
            alt="Logo Cafecotech" 
        />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
