import Container from "@mui/material/Container";

import Header from "./components/Header";

import { Home, FullPost, Registration, AddPost, Login } from "./pages";

export default function App() {
    return (
        <>
            <Header />
            <Container maxWidth="lg">
            <Home />
            {/* <FullPost /> */}
            {/* <AddPost /> */}
            {/* <Login /> */}
            {/* <Registration /> */}
            </Container>
        </>
    )
}