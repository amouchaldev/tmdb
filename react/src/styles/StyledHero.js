import styled from "styled-components";
import headerBg from '../assets/images/header-bg.jpg'
const StyledHero = styled.header`

  background-image: url(${headerBg});
  color: #fff;
  height: 14rem;
  position: relative;
  margin-bottom: 4rem;
 
  h5 {
    text-align: center;
    margin-top: 2.2rem;
    font-size: 1.7rem;
  }
`;
export default StyledHero