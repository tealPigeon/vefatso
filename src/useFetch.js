import { useState, useEffect } from "react"
export function useFetch(url, opts) {

    const [data,setData] = useState()
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState()

    useEffect(()=>{
        (
        async function(){
            try{
                const response = await fetch("http://85.193.91.30/?content=json");
                const res = await response.json()
                setLoading(true)
                setData(res)
            }
            catch(err){
                setError(err)
            }
        }
        )()
    },[])
    return [ data, loading, error ]
}