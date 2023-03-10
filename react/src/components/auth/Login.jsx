import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { backEndApi, csrf } from "../../app/api";
import { isAuthenticated } from "../../features/UserReducer";
import StyledLogin from "../../styles/StyledLogin";

const Login = ({closeFn}) => {
  const dispatch = useDispatch()  
  const emailRef = useRef()
  const passwordRef = useRef()
  const [loginErrors, setLoginErrors] = useState(null)

  async function handleLogin(e) {
    e.preventDefault()
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    await csrf()
    try {
      const response = await backEndApi.post('/login', user)
      // console.log('login successfully')
      if (response) {
        console.log(response)
        closeFn()
        dispatch(isAuthenticated())
      }
    }
    catch (err) {
      setLoginErrors(err.response.data.errors)
      // console.log('erros : ', err)
    }
  }
  return (
      <StyledLogin onSubmit={e => handleLogin(e)}>
        <form action="">
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input type="text" ref={emailRef}/>
          {loginErrors?.email && <p className="err-txt">{loginErrors.email[0]}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input type="password" ref={passwordRef}/>
          {loginErrors?.password && <p className="err-txt">{loginErrors.password[0]}</p>}
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </StyledLogin>
  );
};

  
export default Login;
