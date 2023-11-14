

import { useEffect, useState } from "react";


function useCurrencyInfo(currency, seterr){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        .catch(()=> {
            seterr("Check Your Internet Connection");
            
    })
        
    }, [currency])
    return data
}

export default useCurrencyInfo