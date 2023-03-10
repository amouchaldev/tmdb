import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import StyledContainer from "../styles/StyledContainer";
import PostersList from "./PostersList";
import { fetchPopularPosters, fetchTrendingPosters } from "../features/actions";
import { useNavigate } from "react-router-dom";
const More = () => {
  const Navigate = useNavigate();
  const { type, section } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    if (type === "more") {
      if (section === "movie") return state.movie.popularMovies;
      if (section === "tv") return state.tvShow.popularTvShow;
    }
    if (type === "trending") {
      if (section === "movie") return state.movie.trendingMovies;
      if (section === "tv") return state.tvShow.trendingTvShow;
    }
    else return []
  });
  useEffect(() => {
    if (type === "more") {
      if (section === "movie") dispatch(fetchPopularPosters("movie", 20));
      if (section === "tv") dispatch(fetchPopularPosters("tv", 20));
    }
    else if (type === 'trending')  {
        if (section === "movie") dispatch(fetchTrendingPosters("movie"));
        if (section === "tv") dispatch(fetchTrendingPosters("tv"));
    }
    else Navigate('*')
  }, [type, section]);
  return (
    <>
      <section>
        <StyledContainer>
          <button className="btn btn-primary" onClick={() => Navigate(-1)}>
            Back
          </button>
          <PostersList data={data} type={section}/>
        </StyledContainer>
      </section>
    </>
  );
};

export default More;
