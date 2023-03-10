import { Outlet } from "react-router-dom"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

const MasterLayout = () => {
    return (
        <>
        <Hero />
          <Outlet />
        <Footer />
      </>
    )
  }
  
  export default MasterLayout