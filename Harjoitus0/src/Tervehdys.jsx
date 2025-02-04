import * as React from 'react'
 
function Tervehdys({name}) {
    console.log(`Nimi: ${name}`); //Selaimen konsoliin tulostuu Nimi: Ville
    return(
      <p>Hei {name}!</p>
    )
}
 
export default Tervehdys