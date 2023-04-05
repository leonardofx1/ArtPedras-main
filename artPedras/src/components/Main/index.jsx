import React from 'react';

import main from '../../assets/style/main.scss';
import projetos from '../../assets/style/projetos.scss'

import granito from '../../assets/img/granito.webp';
import paraVoce from '../../assets/img/paraVoce.webp';
import whats from '../../assets/img/whats.png';
import insta from '../../assets/img/insta.png'

const Main = () => {

    return (

        <main>
        <section className="container__qualidades">
            <article className="qualidades">
                <h3>Atendimento personalizado</h3>
                <p>
                    Nossa equipe está comprometida em fornecer atendimento
                    personalizado e identificar oportunidades únicas em cada
                    projeto.
                </p>
            </article>
            <article className="qualidades">
                <h3>Projetos Sob Medida</h3>
                <p>
                    Cada projeto é único e merece atenção individualizada.
                    Por isso, trabalhamos de forma personalizada para
                    entregar serviços sob medida para cada cliente,
                    garantindo que seus sonhos sejam concretizados da melhor
                    forma possível.
                </p>
            </article>
            <img src={whats} alt="rede-social-whatsapp" className='whats__fixed' />
            <img src={insta} alt="rede social instagram"  className='insta__fixed'/>
        </section>
        <div className="container__projetos">
            <h2>Projetos</h2>

            <section className="projetos">
                <article className="projeto">
                    <img src={granito} alt="granito"/>
                </article>
                <article className="projeto">
                    <img src={granito} alt="granito"/>
                </article>

                <article className="projeto">
                    <img src={granito} alt="granito"/>
                </article> <article className="projeto">
                    <img src={granito} alt="granito"/>
                </article>
              
            </section>
        </div>
        <section className="propraganda">
            <img src={paraVoce} alt="anuncio"/>
        </section>
    </main>
    )

}

export default Main