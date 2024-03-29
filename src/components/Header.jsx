import '../style/header.css';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import { Link } from "react-router-dom"

import Tooltip from '@mui/material/Tooltip';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export default function Header() {
    const isAuth = false;

    const color = {
        one: '3c3c3c',
    }

    const onClickLogout = () => {};

    return (
        <div className="header">
            <Container maxWidth="lg" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="logo">
                    <Link to="/">
                        <button style={{ }} onClick={''}><img src="src/assets/logo.png" alt="logo" /></button>
                    </Link>
                </div>
                <div className="user">
                    {isAuth ? (
                    <>
                        <Link to="/ads/create">
                            <Button style={{ backgroundColor: '#3c3c3c' }} variant="contained">Разместить объявление</Button>
                        </Link>
                        <Tooltip title="Выйти">
                            <Button style={{ borderColor: '#3c3c3c', color: '#3c3c3c', marginLeft: 10, padding: 0, width: 37, height: 37, minWidth: "auto"}} onClick={onClickLogout} variant="outlined" color="error">
                                <LogoutOutlinedIcon style={{fontSize: 25}}/>
                            </Button>
                        </Tooltip>
                    </>
                    ) : (
                    <>
                        <Link to="/login">
                            <Button style={{ borderColor: '#3c3c3c', color: '#3c3c3c' }} variant="outlined">Войти</Button>
                        </Link>
                        <Link to="/register" style={{marginLeft: 10}}>
                            <Button style={{ backgroundColor: '#3c3c3c' }} variant="contained">Создать аккаунт</Button>
                        </Link>
                    </>
                    )}
                </div>
            </Container>
        </div>
    )   
}