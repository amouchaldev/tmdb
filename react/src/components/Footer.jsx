import { useTheme } from "styled-components";
import { useRef, useState } from "react";
import logo from '../assets/images/logo-light.png'
import StyledContainer from "../styles/StyledContainer";
import StyledFooter, { StyledCopyright } from "../styles/StyledFooter";
import StyledContact from "../styles/StyledContact";
import { useSelector } from "react-redux";
import Modal from "./Modal";
import Register from "./auth/Register";
const Footer = () => {
  const { user } = useSelector(state => state.user)
  const { colors: { primary, white } } = useTheme();

  const nameRef = useRef('')
  const emailRef = useRef('')
  const messageRef = useRef('')
  
  // Register Modal
  const [modalStatus, setModalStatus] = useState(false)
  window.addEventListener('click', (e) => {
    if (e.target === document.querySelector('#modal > div:first-child')) {
      setModalStatus(false)
    }
  })


  return (
    <>
    {
      !user && (
    <StyledFooter primary={primary} id='contact'>
        <StyledContact bg={white}>
        <div className="form-group">
          <label htmlFor="name">name</label>
          <input type="text" ref={nameRef} placeholder='name'/>
        </div>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input type="text" ref={emailRef} placeholder='email'/>
        </div>
        <div className="form-group">
          <label htmlFor="message">message</label>
          <textarea cols="30" rows="10" ref={messageRef} placeholder='message..'></textarea>
        </div>
        <button className="btn btn-primary">Send</button>
      </StyledContact>
      <StyledContainer>
        <div className="info">
        <img src={logo} alt="logo" className="logo" />
        <p>Welcome to TMDB, the ultimate destination for movie and TV show lovers. Our website allows you to create personalized lists of your favorite movies and TV shows, mark those you want to watch and those you've already seen. With our easy-to-use interface and extensive database of titles, you can find your next binge-worthy show or classic favorite in no time. Sign up today and start building your own collection of must-watch content!</p>
          <button onClick={() => setModalStatus(true)}>Create account now</button>

        </div>
      </StyledContainer>  
    </StyledFooter>
      )
    }
    <StyledCopyright>&copy; {new Date().getFullYear()}</StyledCopyright>
    {/* Register Modal */}
    <Modal open={modalStatus} closeFn={() => setModalStatus(false)}>
      <Register closeFn={() => setModalStatus(false)} />
    </Modal>
    </>
  );
};


export default Footer;
