import React from 'react';
import Tervehdys from './Tervehdys.jsx';
import Infolista from './infolista.jsx';

const Kayttajakortti = ({ nimi, lista }) => {
    return (
        <div>
            <Tervehdys name={nimi} />
            <Infolista taulukko={lista} />
        </div>
    );
};

export default Kayttajakortti;
