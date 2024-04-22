import { useEffect, useState } from "react";

function useFetchedData(url){
    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchData = async () => {
        try {
            const fetchProduct = await fetch(url);
            const result = await fetchProduct.json();
            if(result){
                setData(result["products"] || result);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(error.message);
        } 
    }
   useEffect(() => {
    fetchData();
   },[url])
    return {data , loading,error};
}
export default useFetchedData;