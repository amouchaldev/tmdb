import StyledWrapperNav from "../styles/StyledWrapperNav";
import StyledNav from "../styles/StyledNav";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo-light.png'
import StyledContainer from "../styles/StyledContainer";
import Modal from "./Modal";
import Login from "./auth/Login";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutFn } from "../features/UserReducer";
import { AiOutlineUser } from "react-icons/ai"


const WrapperNav = (props) => {  
  const dispatch = useDispatch()
  const {loading, user} = useSelector(state => state.user)
  const [modalStatus, setModalStatus] = useState(false)

  window.addEventListener('click', (e) => {
    if (e.target === document.querySelector('#modal > div:first-child')) {
      setModalStatus(false)
    }
  })


  return (
    <>
    <StyledWrapperNav className="nav-wrapper" bg={props.bg}>
      <StyledContainer>
      <Link to="/">
        <h4>
          <img src={logo} alt="logo" className="logo" />
        </h4>
      </Link>
      <StyledNav>
        <ul>
          <li>
            <Link to="/trending/movie/list">trending movies</Link>
          </li>
          <li>
            <Link to="/trending/tv/list">trending tv show</Link>
          </li>
          {/* <li>
            <Link to="#contact">discover</Link>
          </li> */}
        </ul>
      </StyledNav>
      {
        !loading ? 
        (user?.id ?
        <div>
        <Link to='/u' className="profile"><AiOutlineUser /></Link> 
        <button onClick={() => dispatch(logoutFn())} className="btn-outline">logout</button> 
        </div>
        : 
        <div>
        {/* <button className="btn btn-sm" onClick={() => setActiveModal({...activeModal, register: true})}>register</button> */}
        <button className="btn-outline" onClick={() => setModalStatus(true)}>login</button>
        </div>) 
        : ''
      }
      
      </StyledContainer>
    </StyledWrapperNav>
    <Modal open={modalStatus} closeFn={() => setModalStatus(false)}>
      <Login closeFn={() => setModalStatus(false)} />
    </Modal>
    </>
  );
};

export default WrapperNav;
