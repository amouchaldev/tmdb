import styled from "styled-components";
import { motion } from "framer-motion";
const StyledPostersList = styled(motion.section)`
  margin: 2.5rem 0;
  & > .list {
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 600px) {
      & > div {
        width: 33.33%;
      }
    }
    @media (min-width: 600px) {
      & > div {
        width: 25%;
      }
    }
    @media (min-width: 768px) {
      & > div {
        width: 20%;
      }
    }
    @media (min-width: 992px) {
      & > div {
        width: 16.66%;
      }
    }
    @media (min-width: 1700px) {
      & > div {
        width: 12.5%;
      }
    }
  }
`;
export default StyledPostersList;