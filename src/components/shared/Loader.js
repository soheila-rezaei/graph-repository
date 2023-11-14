
import React from 'react';
import {TailSpin} from "react-loader-spinner";

const Loader = () => {
    return (
    <div style={{width:"100%" ,height:"1000px" ,paddingTop:"20px",display:"flex",justifyContent:"center"}}>
        <TailSpin
            width="100"
            heigth="100"
            color='grey'
            ariaLabel="loading"

        />
    </div>
    );
};

export default Loader;