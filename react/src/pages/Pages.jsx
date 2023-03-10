import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./Home"
import { ThemeProvider } from "styled-components"
import Search from "../components/Search"
import More from "../components/More"
import { AnimatePresence } from "framer-motion"
import Detail from "./Detail"
import MasterLayout from "../layouts/MasterLayout"
import Dashboard from "./Dashboard"
import AuthLayout from '../layouts/AuthLayout'
import MyList from "../components/MyList"
import { useDispatch } from "react-redux"
import { isAuthenticated } from "../features/UserReducer"
const NoPage = () => {
  return (
    <h1>ERROR 404</h1>
  )
}

const Pages = () => {
  const dispatch = useDispatch()
  dispatch(isAuthenticated())
  const location = useLocation()
  const theme = {
    colors: {
      primary: '#0984e3',
      white: '#fff',
      gradient: "linear-gradient(120deg,#005156 0%,#000000 100%)",
      dark: '#2d3436'   
    }
  }
  
  return (

    <ThemeProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>

        <Routes location={location} key={location.pathname}>


          <Route path='/' element={<MasterLayout />}>
            <Route index element={<Home />}></Route>
            <Route path='/search/:keywords' element={<Search />} />
            <Route path='/:type/:section/list' element={<More />} />
            <Route path='*' element={<NoPage />} />
          </Route>

            <Route >
              <Route path='movie/:id' element={<Detail section='movie'/>} />
              <Route path='tv/:id' element={<Detail section='tv'/>} />
            </Route>


          <Route path='/u' element={<AuthLayout />}>
            <Route index element={<Dashboard />} />
            <Route path=':section' element={<MyList />} />
          </Route>


        </Routes>

        </AnimatePresence>
    </ThemeProvider>
  )
}

export default Pages