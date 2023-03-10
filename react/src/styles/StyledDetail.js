import styled from "styled-components";
const StyledDetail = styled.header`
  margin-bottom: 8rem;
  height: 70vh;
  position: relative;
  background-image: ${(props) =>
    `url("https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${props.cover}")`};
  background-size: cover;

  .nav-wrapper {
    position: absolute;
    width: 100%;
    z-index: 1000;
  }

  & > .overlay {
    position: absolute;
    background-image: linear-gradient(rgb(7 131 255 / 1), rgb(0 0 0));
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0.7;
  }
  .content {
    /* box-shadow: 1px 1px 0px 1px #0000004f; */
    position: relative;
    z-index: 100;
    top: 18vh;
    left: 50%;
    width: 87vw;
    height: 37rem;
    background-image: ${(props) =>
      `url("https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${props.cover}")`};    -webkit-transform: translate(-50%,-2%);
    -ms-transform: translate(-50%,-2%);
    transform: translate(-50%,0);
    background-size: cover;
    padding: 2rem;
    border-radius: 1rem;
    overflow: hidden;
    /* & > .overlay {
      position: absolute;
      background-image: linear-gradient(rgb(7 131 255 / 1), rgb(0 0 0));
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0.55;
      z-index: -1;
    } */

    & > div:nth-child(2) {
      display: flex;
      flex-direction: row;
      gap: 2.5rem;
      width: 100%;
      height: 100%;
      .poster {
        overflow: hidden;
        width: 17rem;
        height: 100%;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .info {
        h2 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        p {
          font-size: 14px;
          font-size: 14px;
        margin-bottom: 2rem;
        width: 60%;
        line-height: 1.75rem;
        @media (max-width: 650px) {
          & {
            width: 100%;
          }
        }
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        color: #fff;
      }
      ul {
        display: flex;
        list-style: none;
        align-items: center;

        li {
          cursor: pointer;
          transition: all 0.5s;
          &:hover {
            transform: scale(0.97);
            opacity: 0.8;
          }
        }
        li:not(li:last-child) {
          border-radius: 50%;
          /* background-color: #2980b9; */
          border: 1px dashed #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.9rem 0.98rem;
          margin-right: 2rem;
        }
        li:first-child {
          padding: 1.2rem 0.6rem !important;
          font-size: 14px;
          span {
            margin-left: 5px;
          }
        }
        li:last-child {
          display: flex;
          align-items: center;
          svg {
            margin-right: 0.6rem;
          }
        }
      }
    }
  }
`;
export default StyledDetail