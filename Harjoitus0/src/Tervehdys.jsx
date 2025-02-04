import * as React from 'react'
 
function Tervehdys({name}) {
    console.log(`Nimi: ${name}`);
    return(
      <p>Hei {name}!</p>
    )
}
 
export default Tervehdys