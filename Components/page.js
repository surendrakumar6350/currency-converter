"use client"
import React, { useState } from 'react'

export const Showme = ({keys, currency, tocurrency, oncurrencychange, ans, result, kuchb}) => {
  
  return (
    <>
    <input className='ankit' onChange={oncurrencychange}/>
    <select onClick={kuchb} onChange={currency}>
      {keys.map((e)=> <option value={e}>{e}</option>)}
    </select>
    <br></br>
    <br></br>
    

<input className='ankit' value={ans}/>
    <select onClick={kuchb} onChange={tocurrency}>
    {keys.map((e)=> <option value={e}>{e}</option>)}
    </select>
    <br></br>
    <br></br>

    <button onClick={result}>
      convert 
    </button>
  
    </>
  )
}

