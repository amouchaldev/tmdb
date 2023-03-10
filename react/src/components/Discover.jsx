import SectionHeader from "./SectionHeader";
import { useEffect } from "react";
import PostersList from "./PostersList";
import { fetchDiscoverMovies } from "../features/movieReducer";
import { useSelector, useDispatch } from "react-redux";
const Discover = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.movie.discoverList)
  useEffect(() => {
    dispatch(fetchDiscoverMovies())
  }, []);
  return (
    <PostersList 
    data={data}
    type='movie'
    >
        <SectionHeader 
        title="Discover"
        />
    </PostersList>
  );
};
export default Discover;
