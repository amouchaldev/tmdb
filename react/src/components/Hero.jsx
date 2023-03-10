import {BsSearch} from 'react-icons/bs'
import StyledHero from '../styles/StyledHero';
import StyledForm from '../styles/StyledForm';
import StyledContainer from '../styles/StyledContainer';
import { useEffect, useState } from 'react';
import { useNavigate , useParams} from 'react-router-dom';
import WrapperNav from './WrapperNav';
const Hero = () => {
  const params = useParams()
  const navigate = useNavigate()

  const [keywords, setKeywords] = useState('')
  useEffect(() => {
    setKeywords(params.keywords || '')
  }, [])
const getSearch = e => {
  e.preventDefault()
  if (keywords.trim() === '') return alert('please write something')
  navigate('/search/' + keywords)
  // console.log(keywords)
} 

  return (
    <StyledHero>
        <StyledContainer>
        <WrapperNav/>
        <h5>Find Movies, TV shows and more</h5>

        <StyledForm onSubmit={getSearch}>
          <div>
            <BsSearch />
            <input 
            type="text" 
            placeholder="Enter keywords..." 
            value={keywords}
            onChange={e => setKeywords(e.target.value)}
            />
          </div>
        </StyledForm>

      </StyledContainer>
    </StyledHero>
  );
};


  

export default Hero;
