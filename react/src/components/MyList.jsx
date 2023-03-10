import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { api_key, backEndApi, tmdbApi } from "../app/api";
import { useEffect, useState, useCallback } from "react";
import PostersList from "./PostersList";
import StyledContainer from "../styles/StyledContainer";
import { getMyList } from "../features/actions";

const MyList = () => {
  const { section } = useParams();
  const dispatch = useDispatch();
  // const { user, loading } = useSelector(state => state.user)
  const navigate = useNavigate();
  const myList = useSelector((state) => {
    switch (section) {
      case "watched":
        return state.user.watched;
      case "watchlist":
        return state.user.watchlist;
      case "favorite":
        return state.user.favorite;
      default:
        return [];
    }
  });
  const [data, setData] = useState([]);
  // console.log("my list:: ", myList);

  const { user, loading } = useSelector((state) => state.user);
// console.log('this is my list')

  const fetchMyListFromTmdb = () => {
    setData([])
    myList.forEach((elem) => {
      tmdbApi(`/${elem.media_type}/${elem.media_id}?api_key=${api_key}`)
        .then((res) => {
          // console.log("from cllback");
          setData((prev) => {
            // setData([])
            return [...prev, { media_type: elem.media_type, ...res.data, _id: elem.id }];
          });
          // console.log("my data: ", data);
        })
        .catch((err) => console.log(err));
    });
    // setData([])
    // 
  }

  console.log('my data changed', data)
  useEffect(() => {
    fetchMyListFromTmdb();
  }, [myList]);

  useEffect(() => {
    dispatch(getMyList(section, user?.id));
  }, []);

  return (
    <StyledContainer className="my-5">
      <button className="btn btn-primary" onClick={() => navigate(-1)}>
        back
      </button>
      {
      !loading
        ? <PostersList data={data}/>
        : "loading"
        }
        
    </StyledContainer>
  );
};

export default MyList;
