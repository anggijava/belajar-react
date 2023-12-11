import HeaderComponent from "./HeaderComponent"
import FooterComponent from "./FooterComponent"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    )
}

export default Layout;