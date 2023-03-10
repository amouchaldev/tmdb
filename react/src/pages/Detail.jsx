import Footer from "../components/Footer";
import Swal from "sweetalert2";
import StyledDetail from "../styles/StyledDetail";
import { addToLibrary } from "../features/actions";
import {
  AiFillStar,
  AiOutlineUnorderedList,
  AiFillHeart,
} from "react-icons/ai";
import { MdBookmarkAdd } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDetail, getSimilar } from "../features/actions";
import { useParams } from "react-router-dom";
import PostersList from "../components/PostersList";
import StyledContainer from "../styles/StyledContainer";
import WrapperNav from "../components/WrapperNav";

const Detail = ({ section }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const {user} = useSelector(state => state.user)

  const detail = useSelector((state) => {
    if (section === "movie") return state.movie.movieDetail;
    if (section === "tv") return state.tvShow.tvDetail;
  });

  // get similar movies / tv show
  const similar = useSelector((state) => {
    if (section === "movie") return state.movie.similarMovies;
    if (section === "tv") return state.tvShow.similarTv;
  });

  useEffect(() => {
    dispatch(getDetail(section, id));
    dispatch(getSimilar(section, id));
  }, []);

  function addToWatched() {
    if(!user?.id) return loginFirstAlert()
    dispatch(addToLibrary(section, id, 'watched', user.id))
      }

  function addToFavorite() {
    if(!user?.id) return loginFirstAlert()
    dispatch(addToLibrary(section, id, 'favorite', user.id))
  }

  function addToWatchList() {
    if(!user?.id) return loginFirstAlert()
    dispatch(addToLibrary(section, id, 'watchlist', user.id))
  }
    // function return alert with message login first
  function loginFirstAlert() {
    return Swal.fire('Please Login First!')
  }


  return (
    <>
      <StyledDetail cover={detail.backdrop_path}>
        <WrapperNav />
        <div className="overlay"></div>
        <section className="content">
          <div className="overlay"></div>
          <div>
            <div className="info">
              <h2>{section === "movie" ? detail.title : detail.name}</h2>
              <p>{detail.overview}</p>
              <ul>
                <li>
                  <AiFillStar />{" "}
                  <span>
                    {detail?.vote_average && detail.vote_average.toFixed(1)}
                  </span>
                </li>
                <li title="Add to watched" onClick={addToWatched}>
                  <AiOutlineUnorderedList />
                </li>
                <li title="Mark as favorite" onClick={addToFavorite}>
                  <AiFillHeart />
                </li>
                <li title="Add to your watchlist" onClick={addToWatchList}>
                  <MdBookmarkAdd />
                </li>
                <li>
                  {/* <BsFillPlayFill /> play trailer */}
                </li>
              </ul>
            </div>
          </div>
        </section>
      </StyledDetail>
      <StyledContainer>
        <h3 className="similar-title">Similar {section === 'movie' ? 'movies' : 'tv show'}</h3>
        {similar.length === 0 && <p className="alert">No Similar {section === 'movie' ? 'movies' : 'tv show'} yet </p>}
        <PostersList type={section} data={similar} />
      </StyledContainer>
      <Footer />
    </>
  );
};

export default Detail;
