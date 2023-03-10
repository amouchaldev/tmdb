import styled from "styled-components";
import { motion } from "framer-motion";
const StyledCategory = styled(motion.section)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  & a:first-child:hover {
      transform: scale(1.2);
    }
    & a:last-child:hover {
      transform: scale(1.2);
    }
  @media (min-width: 1170px) {
    & a:first-child:hover {
      transform: scale(1.2) translateX(3rem);
    }
    & a:last-child:hover {
      transform: scale(1.2) translateX(-3rem);
    }
  }
  & a:first-child > .overlay:first-of-type {
    background-image: linear-gradient(
      rgb(7 131 255 / 40%),
      rgb(46 46 46 / 50%)
    );
  }
  & a:last-child > .overlay:last-of-type {
    background-image: linear-gradient(rgb(7 131 255 / 0), rgb(255 24 0 / 49%));
  }
`;
export default StyledCategory