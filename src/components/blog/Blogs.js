import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_BLOGS_INFO} from "../../graphql/Queries";
import {Grid} from "@mui/material";
import CardEl from "../shared/CardEl";
import Loader from "../shared/Loader"



const Blogs = () => {
    const {loading,data,errors}=useQuery(GET_BLOGS_INFO);
    if (loading) return <Loader/>
    if (errors) return <h1>errors!...</h1>

    console.log(data)
    return (
        <Grid container spacing={2}>
            {data.posts.map ((post)=>(
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                    <CardEl {...post}/>
                </Grid>
            ))}


        </Grid>
    );
};

export default Blogs;