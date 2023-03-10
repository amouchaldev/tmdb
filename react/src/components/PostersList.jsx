import Poster from "./Poster";
import StyledPostersList from "../styles/StyledPostersList";
const PostersList = ({data, type, children}) => {
  return (
    <StyledPostersList
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.3}}
    >
        {children}
    <div className="list">
      {data.map((poster, i) => {
         return (
          poster.poster_path && <Poster
            key={i}
            _id={poster._id || null}
            id={poster.id}
            title={poster.name || poster.title}
            poster={poster.poster_path}
            type={poster.media_type || type}
            width="16.66%"
          />
        );
      })}
    </div>
  </StyledPostersList>
  )
}

export default PostersList