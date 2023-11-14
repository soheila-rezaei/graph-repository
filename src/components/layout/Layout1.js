import React from 'react';
import LastPoint from "./LastPoint";
import Header from "./Header";

const Layout1 = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <LastPoint/>
        </>
    );
};

export default Layout1;