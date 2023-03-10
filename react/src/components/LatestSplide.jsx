import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect } from "react";
import SectionHeader from "./SectionHeader";
import Poster from "./Poster";
import { fetchPopularPosters } from "../features/actions";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
const LatestSplide = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    if (props.section === "movie") return state.movie.popularMovies;
    if (props.section === "tv") return state.tvShow.popularTvShow;
  });

  useEffect(() => {
    if (props.section === "movie") dispatch(fetchPopularPosters(props.section));
    if (props.section === "tv") dispatch(fetchPopularPosters(props.section));
  }, []);

  return (
    <motion.section 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    style={{ margin: props.margin }}
    transition={{duration: 0.3}}
    >
      <SectionHeader
        section={props.section}
        title={props.section === "movie" ? "Popular Movies" : "Popular tv show"}
      />
        <Splide
          aria-label="My Favorite Images"
          options={{
            arrows: false,
            perPage: 8,
            updateOnMove : true,
            pagination: false,
            breakpoints: {
              1700: {
                perPage: 6,
              },
              1024: {
                perPage: 4,
              },
              992: {
                perPage: 3,
              },
              640: {
                perPage: 2,
              }, 
            },
          }}
        >
          {data.map((poster, i) => {
            return (
              <SplideSlide 
              section={props.section} 
              key={poster.id}
              >
                <Poster
                  id={poster.id}
                  poster={poster.poster_path}
                  title={props.section === "movie" ? poster.title : poster.name}
                  type={props.section}
                />
              </SplideSlide>
            );
          })}
      </Splide>
    </motion.section>
  );
};

export default LatestSplide;
