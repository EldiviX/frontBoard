import '../style/header.css'
import Container from "@mui/material/Container";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function Header() {
    return (
        <div className="header">
            <Container maxWidth="lg" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="logo">
                    <button onClick={''}><img src="src/assets/logo.png" alt="logo" /></button>
                </div>
                <div className="user">
                    <button style={{ color: 'black' }}><AccountCircleIcon fontSize='large'/></button>
                </div>
            </Container>
        </div>
    )   
}