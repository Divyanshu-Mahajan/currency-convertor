import { useEffect, useState } from 'react'

const useCurrencyInfo = () => {
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(process.env.REACT_APP_CURRENCY_API)
        .then((res) => res.json())
        .then((res) => setData(res.rates))
    },[])
    return data
}

export default useCurrencyInfo
