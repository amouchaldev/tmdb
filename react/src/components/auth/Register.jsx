import styled from "styled-components";
import { useRef, useState } from "react";
import { backEndApi, csrf } from "../../app/api";
import { isAuthenticated } from "../../features/UserReducer";
import { useDispatch } from "react-redux";

const Register = ({closeFn}) => {
const dispatch = useDispatch()
const nameRef = useRef()
const emailRef = useRef('')
const passwordRef = useRef()
const confirmPasswordRef = useRef()
const [loginErrors, setLoginErrors] = useState(null)

async function createAccount(e) {
    e.preventDefault()
    
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: confirmPasswordRef.current.value,
    }
    // console.log(user)
    // return null
    await csrf()
    try {
      const response = await backEndApi.post('/register', user)
      // console.log('login successfully')
      if (response) {
        // console.log(response)
        closeFn()
        dispatch(isAuthenticated())
      }
    }
    catch (err) {
      // console.log(err.response?.data?.errors)
      setLoginErrors(err.response?.data?.errors)
      // console.log('erros : ', err.response.data.errors)
    }
  
}


  return (
      <StyledRegister>
        <form onSubmit={e => createAccount(e)}>
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input type="text" ref={nameRef} />
          {loginErrors?.name && <p className="err-txt">{loginErrors.name[0]}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input type="text" ref={emailRef} />
            {loginErrors?.email && <p className="err-txt">{loginErrors.email[0]}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" ref={passwordRef} />
          {loginErrors?.password && <p className="err-txt">{loginErrors.password[0]}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="">Confirm password</label>
            <input type="password" ref={confirmPasswordRef} />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </StyledRegister>
  );
};

const StyledRegister = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  
  form {
    width: 32rem;
    .form-group {
      margin-bottom: 1.3rem;
      label {
        display: inline-block;
        margin-bottom: 0.5rem;
      }
      input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid;
        border-radius: 0.3rem;
        background-color: transparent;
        &:focus {
          border: none;
          outline: ${(props) => `2px solid ${props.theme.colors.primary}`};
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
  }
`;

export default Register;
