import styled from "styled-components";

const StyledFooter = styled.footer`
margin-top: 11rem;
  padding: 3rem 0;
  background-color: ${(props) => props.theme.colors.primary};
  position: relative;
  min-height: 27rem;
.logo {
  width: 8rem;
  margin-bottom: .5rem;
}
.info {
  width: 44%;
  color: #fff;
  p {
    line-height: 1.5rem;
    font-size: 13px;
    margin-bottom: 1.5rem;
  }
button {
  border-width: 1px;
    background: transparent;
    padding: 0.8rem 0.8rem;
    color: #FFF;
    border-color: #fff;
    border-style: solid;
    border-radius: 0.3rem;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.colors.primary};
      background-color: ${props => props.theme.colors.white};
    }
}
}
  @media (max-width: 850px)  {
  padding-bottom: 4rem;
      
    .info {
      text-align: center;
      width: 100%;
      position: relative;
      top: -4rem;
    }
  }
`;
export const StyledCopyright = styled.div`
    text-align: center;
    background-color: ${props => props.theme.colors.primary};
    padding: 2rem;
    color: #fff;
` 
export default StyledFooter