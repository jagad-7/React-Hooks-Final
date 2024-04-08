import {useState, useEffect} from 'react'

const useApiFetch = (URL) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false)
  
    const apiURL = async () => {
      setLoading(true)
      setIsError(false)
      try {
        const response = await fetch(URL);
        const commingData = await response.json();
        setData(commingData);
        setLoading(false)
      } catch (error) {
          setLoading(false)
          setIsError(true)
      }
    };
  
    useEffect(() => {
      apiURL(URL);
    },[]);
    return(
        [data, loading, isError]
    )
}

export default useApiFetch