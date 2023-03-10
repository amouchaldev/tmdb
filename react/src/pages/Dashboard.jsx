import StyledContainer from "../styles/StyledContainer";
import {AiOutlineUnorderedList, AiFillHeart} from 'react-icons/ai'
import {MdBookmarkAdd} from 'react-icons/md'
import { Link } from "react-router-dom";
import StyledDashboard from "../styles/StyledDashboard";

const Dashboard = () => {
  return (
    <StyledContainer>
      <StyledDashboard>
        <Link to='/u/watched' title="my list"><AiOutlineUnorderedList /></Link>
        <Link to='/u/favorite' title="my favorite"><AiFillHeart /></Link>
        <Link to='/u/watchlist' title="my watchlist"><MdBookmarkAdd /></Link>
      </StyledDashboard>
    </StyledContainer>
  );
};

export default Dashboard;
