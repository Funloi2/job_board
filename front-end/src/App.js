import './Style/Style.css';
import Layout from "./Layout/Layout";
import {
    createBrowserRouter,
    Route,
    createRoutesFromElements, RouterProvider,
    // RouterProvider
} from 'react-router-dom';
import Home from "./Components/Home";
import Company from "./Components/Company";
import company from "./Object/Company";



function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/"  element = {<Layout />}>
                <Route index element={<Home />} />
                <Route path="Company" element={<Company company={company}/>} />
            </Route>
        )
    )

    return (
        <>
            <head>
                <title>React App</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
                      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                      crossOrigin="anonymous"/>
                      <link rel="stylesheet" type="text/css" href="slick/slick.css"/>
                      <link rel="stylesheet" type="text/css" href="slick/slick-theme.css"/>
                      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
                      <script type="text/javascript" src="slick/slick.min.js"></script>


            </head>
            <body>
            <div className="App">
                <RouterProvider router={router} />
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                    crossOrigin="anonymous"></script>
            </body>

        </>

    );
}

export default App;
