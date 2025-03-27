import React from 'react';

const OpiskelijaTiedot = ({ opiskelija }) => {
    return (
        <div>
            <h3>Opiskelijan tiedot</h3>
            <p>Nimi: {opiskelija.nimi}</p>
            <p>Ikä: {opiskelija.ika}</p>
            <p>Kurssi: {opiskelija.kurssi}</p>
        </div>
    );
};

export default OpiskelijaTiedot;
