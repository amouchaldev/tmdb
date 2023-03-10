import styled from "styled-components";
const StyledDashboard = styled.section`
    margin: 8rem 0;
  display: flex;
  gap: 3rem;
  justify-content: center;
  & > a {
    display: block;
    cursor: pointer;
    height: 15rem;
    width: 15rem;
    border: 1px solid ${(props) => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    transition: all .3s;
    svg {
      color: ${props => props.theme.colors.primary};
    }
    &:hover {
        transform: scale(.9);
        background-color: ${(props) => props.theme.colors.primary};
        svg {
          color: #fff;
        }
    }
  }
`;
export default StyledDashboard;