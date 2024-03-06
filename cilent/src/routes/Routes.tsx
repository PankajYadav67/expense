import { Route, Routes,  } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import Home from "../pages/Home";
// import { Navbar } from "../Components/Navbar/Navbar"


export const AppRoutes = () => {

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
               <Route path="/auth/login" element={<Login/>} />
                <Route path="/auth/signup" element={<Signup/>} />
            </Routes>
        </>
    )
}