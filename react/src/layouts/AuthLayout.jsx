import { Navigate, Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { useTheme } from 'styled-components'
import WrapperNav from '../components/WrapperNav'
import { useSelector } from 'react-redux'

const AuthLayout = () => {
  const {loading, user} = useSelector(state => state.user)
  const {colors: {primary}} = useTheme()
  return (
    <>
    <WrapperNav bg={primary}/>
      {!loading ? (user?.id ? <Outlet /> : <Navigate to='/' />) : 'loading..'} 
    <Footer />
    </>
  )
}

export default AuthLayout