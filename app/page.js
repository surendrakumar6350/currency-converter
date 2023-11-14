"use client"
import React, { useEffect, useState } from 'react'
import { Showme } from '@/Components/page'
import useCurrencyInfo from '@/folder/page'

const app = () => {
  const [currency, setcurrency] = useState("aave")
  const [tocurrency, settocurrency] = useState("aave")
  const [oncurrencychange, setoncurrencychange] = useState()
  const [ans, setans] = useState()
const [err, seterr] = useState()

  
const data = useCurrencyInfo(currency, seterr)
const keys = Object.keys(data)
  
  
  useEffect(()=> {seterr()},[data])
  delete data['00'];  delete data['1inch'];

  const result = ()=>  setans(oncurrencychange*data[tocurrency]) 
  const kuchb = ()=> setans(0)

  return (
    <>
   <Showme keys={keys} currency={(e)=> setcurrency(e.target.value)}
   tocurrency={(e)=> settocurrency(e.target.value)}
   oncurrencychange={(e)=> setoncurrencychange(e.target.value)}
   ans={ans} result={result} kuchb={kuchb}
   btn1={currency}
   btn2={tocurrency}
   />
   <br></br>
   <br></br>
   <p className='p'>{err}</p>
    </>
  )
}

export default app