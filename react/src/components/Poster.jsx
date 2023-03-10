import StyledPoster from "../styles/StyledPoster";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteFromLibrary } from "../features/actions";
import {AiOutlineDelete} from "react-icons/ai" 
const Poster = ({ _id, id, poster, title, type }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentLocation = location.pathname
    .split("/")
    .filter((q) => !!q)
    .at(-1);
  const showDeleteBtn = ["favorite", "watchlist", "watched"].includes(
    currentLocation
  );
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
    <StyledPoster>
      <Link
        to={`/${type}/${id}`}
        onMouseOver={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <div className="overlay"></div>
        <h5>{title}</h5>
        <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="poster" />
      </Link>
    </StyledPoster>
      {showDeleteBtn && (
        <button
        onClick={() => dispatch(deleteFromLibrary(currentLocation, _id))}
          className="delete-poster"
          title="delete from this list"
          >
          <AiOutlineDelete />
        </button>
      )}
      </div>
  );
};

export default Poster;
