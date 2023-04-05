import React from 'react';

import {CiLocationOn} from 'react-icons/ci'
import rodape from '../../assets/style/rodape.scss'

import whats from  '../../assets/img/whats.png';
import insta from '../../assets/img/insta.png';


const Footer = () => {

    return (
        <footer class="rodape">

        <ul>
            <li>
                <a href="https://www.instagram.com/artpedrasirece/" target="_blank">
                    <img className="icon__contatos" src={whats} alt="whatsapp-icon"/>
                Whatsapp</a></li>
            <li>
                <a
                    href="https://l.instagram.com/?u=https%3A%2F%2Flinkwhats.app%2F6ff15f&e=AT2Nn7I07NWX9FJWjIMOCZm06WAeFDT4v0PQRnY7AsderLqZ0XTLmxvG_HKSTspA7C6MAw-MOOhtDQZUku3Y0FCbWQB5-K4Z"><img
                        className="icon__contatos" src={insta} alt="instagram-icon"/>
                Instagram</a>
            </li>
            <li class="endereco">
                <CiLocationOn/>
                AV SANTOS LOPES - N° 833 - IRECÊ</li>
        </ul>

    </footer>
        
        
    )
}

export default Footer