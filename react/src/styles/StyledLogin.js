import styled from "styled-components"
const StyledLogin = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0;

form {
  width: 32rem;
  .form-group {
    margin-bottom: 1.3rem;
    label {
      display: inline-block;
      margin-bottom: .5rem;
    }
    input {
      width: 100%;
      padding: .5rem;
      border: 1px solid;
      border-radius: .3rem;
      background-color: transparent;
      &:focus {
        border: none;
        outline: ${props => `2px solid ${props.theme.colors.primary}`};
      }
    }
  }
  a {
    color: ${props => props.theme.colors.dark};
    display: inline-block;
    margin-bottom: .5rem;
    transition: all .3s;
    &:hover {
    color: ${props => props.theme.colors.primary};
    }
  }
}`
export default StyledLogin