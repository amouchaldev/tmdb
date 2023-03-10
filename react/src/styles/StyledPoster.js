import styled from "styled-components";
const StyledPoster = styled.div`
  display: block;
  transition: all 0.5s ease;
  width: ${(props) => props.width || "100%"};
  height: 100%;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: linear-gradient(rgb(7 131 255 / 0), rgb(46 46 46 / 50%));
    transform: scale(1);
    -webkit-transition: all 2.5s ease-in-out;
    transition: all 2.5s ease-in-out;

    &:hover {
      transform: scale(3);
      background-image: ${(props) =>
        props.section == "movie"
          ? "linear-gradient(rgb(7 131 255 / 0),rgb(0 154 223))"
          : "linear-gradient(rgb(7 131 255 / 0),rgb(231, 76, 60))"};
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    transform: scale(0.95);
  }
  h5 {
    position: absolute;
    color: #fff;
    left: 50%;
    bottom: 8%;
    text-align: center;
    transform: translate(-50%, -8%);
  }

`;
export default StyledPoster;
