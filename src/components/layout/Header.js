import React from 'react';
import {AppBar, Container, Toolbar, Typography} from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <AppBar position={"sticky"}>
            <Container maxWidth={"lg"}>
                <Toolbar>
                    <Typography component="h1" variant="h5" fontWeight="bold" flex={1} >
                        <Link to="/" style={{color:"#fff", textDecoration:"none" }} >
                            وبلاگ بوتواستارت
                        </Link>

                    </Typography>
                    <Link to="/" style={{color:"#fff" }}>
                        <BookIcon/>
                    </Link>

                </Toolbar>
            </Container>

        </AppBar>
    );
};

export default Header;