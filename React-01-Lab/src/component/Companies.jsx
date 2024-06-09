
import React from 'react'
import Services from './Services'
import Programers from './Programers'

export default function Companies(props) {
  return (

    <>
    <div>
      <h1>Company Name: {props.name1}</h1>
      <p>year of Founded :{props.year1}</p>
      <p> work number :{props.num1}</p>
    </div>
    
    <Services
      Services = {props.Ser1}
      price = {props.price}></Services>

    <Programers 
      pname1 = {props.pname1}
      lan ={props.lan}
      YearW = {props.YearW}
      com1 = {props.com1}
      

      pname2 = {props.pname3}
      lan2 ={props.lan2}
      YearW2 = {props.YearW2}
      com12 = {props.com12}

      pname3 = {props.pname3}
      lan3 ={props.lan3}
      YearW3 = {props.YearW3}
      com13 = {props.com13}
      > </Programers>
</>



  )
  
}
