import ReactDom from 'react-dom'
import styled from 'styled-components'
import {GrClose} from 'react-icons/gr'
const Modal = ({open, children, closeFn}) => {
    if (!open) return null
  return ReactDom.createPortal(
        <>
    <StyledOverlay></StyledOverlay>
      <StyledModal>
        <button className='close-modal' onClick={closeFn}><GrClose /></button>
        {children}
    </StyledModal>
    </>,
    document.getElementById('modal')
  )
}
const StyledOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,.7);
    z-index: 1000;
    ` 
const StyledModal = styled.div`
/* box-shadow: 1px 1px 20px 3px #eee; */
border-radius: 0.5rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem 3rem;
    background-color: #fff;
    z-index: 1000;
    .close-modal {

    }
`

export default Modal