

import React from 'react'

 function Programers(props) {
  return (
    <>
    <div>
        <h1>{props.pname1} </h1>
        <p>languages: {props.lan}</p>
        <p>years : {props.YearW}</p>
        <p>company : {props.com1}</p>
    </div>


<div>
<h1>{props.pname2} </h1>
<p>languages: {props.lan2}</p>
<p>years : {props.YearW2}</p>
<p>company : {props.com12}</p>
</div>


<div>
<h1>{props.pname3} </h1>
<p>languages: {props.lan3}</p>
<p>years : {props.YearW3}</p>
<p>company : {props.com13}</p>
</div>

</>
  )
}

export default Programers