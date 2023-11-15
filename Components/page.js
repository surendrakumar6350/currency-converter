"use client"
import React, { useState } from 'react'

export const Showme = ({keys, currency, tocurrency, oncurrencychange, ans, result, kuchb, btn1, btn2}) => {
const nav1 = btn1.toUpperCase()
const nav2 = btn2.toUpperCase()
  return (
    <>
    <input className='ankit' onChange={oncurrencychange}/>
    <select value={btn1} onClick={kuchb} onChange={currency}>
      {keys.map((e)=> <option value={e}>{e}</option>)}
    </select>
    <br></br>
    <br></br>
    

<input className='ankit' value={ans}/>
    <select value={btn2} onClick={kuchb} onChange={tocurrency}>
    {keys.map((e)=> <option value={e}>{e}</option>)}
    </select>
    <br></br>
    <br></br>

    <button onClick={result}>
      convert {nav1} to {nav2}
    </button>
  
    </>
  )
}

