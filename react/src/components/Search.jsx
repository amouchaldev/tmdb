import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api_key, tmdbApi } from "../app/api";
import StyledContainer from "../styles/StyledContainer";
import PostersList from "./PostersList";
const Search = () => {
    const Navigate = useNavigate()
    const [results, setResults] = useState([])
    const {keywords} = useParams()

    useEffect(() => {
        setResults([])

        tmdbApi.get(`search/multi?query=${keywords}&api_key=${api_key}`)
        .then(res => {
          setResults(res.data.results)
        })
        .catch(err => console.error(err))

    }, [keywords])
    
    const filteredResult = results.filter(result => {
      if (!!result.poster_path && ['tv', 'movie'].includes(result.media_type)) return result
    })
  return (<>
    <section>
  <StyledContainer>
    <button className="btn btn-primary" onClick={() => Navigate(-1)}>Back</button>
    <PostersList data={filteredResult}/>
  </StyledContainer>
    </section>
    </>
  );
};

export default Search;
