import trendingMoviesBg from "../assets/images/trending-movies.jpg";
import trendingTvBg from "../assets/images/trending-tvshow.jpg";
import StyledCategory from "../styles/StyledCategory";
import StyledCard from "../styles/StyledCard";

const Category = () => {
  return (
    <StyledCategory 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.3}}
    id='trending'
    >
      <StyledCard to='/trending/movie/list'>
        <div className="overlay"></div>
        <span>TRENDING MOVIES</span>
        <img src={trendingMoviesBg} alt="" />
      </StyledCard>
      <StyledCard to='/trending/tv/list'>
        <div className="overlay"></div>
        <span>TRENDING TV SHOW</span>
        <img src={trendingTvBg} alt="" />
      </StyledCard>
    </StyledCategory>
  );
};

export default Category;
