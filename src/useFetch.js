import { useState, useEffect } from "react"
export function useFetch(url, opts) {

    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    useEffect(()=>{
        (
        async function(){
            try{
                const response = await fetch("http://85.193.91.30/?content=json");
                const res = await response.json()
                console.log(res)
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