import {Outlet} from "react-router-dom";

// Pages
import Header from "../Components/Header";
import Footer from "../Components/Footer";


function Layout(){
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout;