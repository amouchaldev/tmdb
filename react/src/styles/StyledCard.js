import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledCard = styled(Link)`
  display: block;
  width: 50%;
  height: 26rem;
  background-size: cover;
  overflow: hidden;
  cursor: pointer;
  color: #fff;
  position: relative;
  transition: all .4s;
  &:hover {
    z-index: 1000;
    }
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    /* &:hover {
      transform: scale(3);
    } */
  }

  & > img {
    width: 100%;
    height: 100%;
  }
  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
  @media (max-width: 992px) {
    height: 19rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 26rem;
  }
  @media (max-width: 600px) {
    height: 19rem;
  }
  @media (min-width: 1900px) {
    height: 40rem;
  }
`;
export default StyledCard