import { Route, Routes, } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";
import Login1 from "../components/Auth/Login/Login1";
import Signup1 from "../components/Auth/Signup/Signup1";


export const AppRoutes = () => {

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth/login" element={<Login1/>} />
                <Route path="/auth/signup" element={<Signup1 />} />
            </Routes>

        </>
    )
}