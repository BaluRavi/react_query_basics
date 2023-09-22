import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'

export const Home = () => {

  const { isLoading, isError, data: catData, error, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data
    )
  })

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error : {error.message}</span>
  }

  return (
    <div>
      <h1>This is the Home Page</h1>
      <p>{catData.fact}</p>
      <button onClick={refetch}>Update data</button>
    </div>
  );
};
