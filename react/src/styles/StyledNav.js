import styled from "styled-components";
const StyledNav = styled.nav`
    ul {
        display: flex;
        list-style: none;
        li {
          cursor: pointer;
            margin: 0 1rem;
            transition: all .4s ;
            &:hover {
              opacity: .7;
              transform: scale(.99);
            }
            /* @media (max-width: 768px) { */
                font-size: 14px;
            /* } */
        }
    }
    
`;
export default StyledNav