import Category from "../components/Category";
import LatestSplide from "../components/LatestSplide";
import Discover from "../components/Discover";
import StyledContainer from "../styles/StyledContainer";

const Home = () => {

  return (
    <>
      <StyledContainer>
        <LatestSplide section="movie" margin="5rem 0" />
      </StyledContainer>
      <StyledContainer>
        <LatestSplide section="tv" margin="0 0 5rem" />
      </StyledContainer>
      <Category />
      <StyledContainer>
        <Discover />
      </StyledContainer>
    </>
  );
};

export default Home;
