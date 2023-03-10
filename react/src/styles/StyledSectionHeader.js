import styled from "styled-components"
const StyledSectionHeader = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      h3 {
  margin: 1.2rem 0 1.9rem;
  display: flex;
  align-items: center;
  span {
    height: 1.3rem;
    width: 3px;
    background-color: ${props => props.theme.colors.primary};
    margin-right: 0.7rem;
    border-radius: 7px;
  }  
}
small {
  display: flex;
  color: ${props => props.theme.colors.primary};
  align-items: center;
  transition: all .3s;
  cursor: pointer;
  svg {
      margin-left: 0.3rem;
      font-size: 1.1rem;
  }
  &:hover {
      transform: scale(.9);
  }
  }

`
export default StyledSectionHeader