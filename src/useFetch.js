import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
    .then( res => {
      return res.json()
    })
    .then( data => {
      setData(data);
      setIsPending(false);
      setError(null);
    })
    .catch( err => {
      console.log(err)
    })
  }, [url]);

  return {data, isPending, error};
}

export default useFetch