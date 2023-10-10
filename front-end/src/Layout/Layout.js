import {Outlet} from "react-router-dom";

// Pages
import Header from "../Components/Header";


function Layout(){
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;