import styled from "styled-components"
const StyledWrapperNav = styled.div`
.logo {
  width: 5rem;
}
background-color: ${props => props.bg || 'transparent'};
  & > div:first-child {
    padding: 1.3rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
   
  .profile {
    svg {
      font-size: 1.2rem;
      transform: translate(-32px, 3px);
      transition: all .4s;
      &:hover {
      /* transform: ; */
        transform:  translate(-32px, 3px) scale(.9);
      }
    }
  }
  `
  export default StyledWrapperNav