import styled from "styled-components";

const StyledContact = styled.form`

position: absolute;
  top: -8rem;
  width: 50%;
right: 2%;

  background: ${props => props.theme.colors.white};
  padding: 3rem 2.5rem;
  border-radius: 0.4rem;
  text-align: start;
  -webkit-box-shadow: -1px 1px 2px -1px #b89c9ccc;
  -moz-box-shadow: -1px 1px 2px -1px #b89c9ccc;
  -o-box-shadow: -1px 1px 2px -1px #b89c9ccc;
  box-shadow: -1px 1px 2px -1px #b89c9ccc;
  label {
    display: block;
    margin-bottom: .7rem;
    color: #807d7d;
    text-transform: capitalize;
  }
  input, textarea {
    text-transform: capitalize;
    width: 100%;
    background: #f3f3f3;
    padding: 0.6rem;
    border: none;
    border-radius: .3rem;
  }
  textarea{
    padding: .6rem;
  }
  .form-group{
    margin-bottom: 1.5rem;
  }
  input {
  }
  input::placeholder, textarea::placeholder{
    color: #807d7d;
  }
  input:focus, textarea:focus {
    outline: none;
  }
  @media (max-width: 850px) {
    position: relative;
      width: 90%;
      left: 50%;
      transform: translate(-50%);
  }
`;
export default StyledContact