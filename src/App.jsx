import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Header from "./components/Header";

import { Home, FullAds, Registration, AddAds, Login } from "./pages";

export default function App() {
    return (
        <>
            <Header />
            <Container maxWidth="lg">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/ads/:id" element={<FullAds />}/>
                    <Route path="/add-ads" element={<AddAds />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Registration />}/>
                </Routes>
            </Container>
        </>
    )
}