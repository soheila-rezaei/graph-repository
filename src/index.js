import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {ThemeProvider} from "@mui/material";
import theme from "./mui/Theme";
import {ApolloProvider,ApolloClient,InMemoryCache} from "@apollo/client";
import {BrowserRouter} from "react-router-dom";
const client=new ApolloClient({
    uri:process.env.REACT_APP_GRAPHCMS_URI,
    cache:new InMemoryCache(),
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
        <ThemeProvider theme={theme}>
             <App />
        </ThemeProvider>
        </BrowserRouter>
    </ApolloProvider>


);


