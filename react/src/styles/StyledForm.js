import styled from "styled-components"
const StyledForm = styled.form`
& > div {
  width: 80%;
  height: 4rem;
  margin-top: 3rem;
  position: absolute;
  left: 50%;
  z-index: 1000;
  transform: translate(-50%, 0);
  svg {
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    color: #000000e0;
    transform: scale(1.3);
  }
  input {
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    border: none;
    padding: 0 4rem;
    box-shadow: 0px 1px 3px -2px #4e4c4c;
    &:focus {
      outline: none;
    }
  }
}
`
export default StyledForm