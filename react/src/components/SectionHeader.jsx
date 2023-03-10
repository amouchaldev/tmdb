import StyledSectionHeader from "../styles/StyledSectionHeader";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTheme } from "styled-components";
import { Link } from "react-router-dom";
const SectionHeader = (props) => {
  const {
    colors: { primary },
  } = useTheme();
  return (
    <StyledSectionHeader primary={primary}>
      <h3>
        <span></span>
        {props.title}
      </h3>
      {props.section && (
        <Link to={"/more/" + props.section + '/list'}>
          <small>
            more <MdKeyboardArrowRight />
          </small>
        </Link>
      )}
    </StyledSectionHeader>
  );
};

export default SectionHeader;
