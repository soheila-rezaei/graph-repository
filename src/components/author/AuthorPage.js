import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import sanitizeHtml from "sanitize-html"
import {GET_AUTHOR_INFO} from "../../graphql/Queries";
import {Avatar, Container, Grid, Typography} from "@mui/material";
import CardEl from "../shared/CardEl";
import Loader from "../shared/Loader";

const AuthorPage = () => {
    const {slug}=useParams();
    const{loading , errors,data}=useQuery(GET_AUTHOR_INFO,{
        variables:{slug}
    })
    if (loading) return <Loader/>
    if (errors) return <h1>errors</h1>
    console.log(data)
    const {author:{name,description,field,avatar,posts}}=data;
    return (
       <Container maxWidth={"lg"}>
           <Grid container mt={10}>
               <Grid item
                   xs={12}
                   display={"flex"}
                   flexDirection={"column"}
                   alignItems={"center"}
               >
                   <Avatar  src={avatar.url} sx={{width:250, height:250}}/>
                   <Typography component="h3" variant="h5" mt={4} fontWeight={700}>{name}</Typography>
                   <Typography component="p" variant="p" mt={2}  color="text.secondary">{field}</Typography>
               </Grid>
               <Grid item xs={12} mt={5}>
                  <div dangerouslySetInnerHTML={{__html:sanitizeHtml(description.html) }}>

                  </div>
               </Grid>
               <Grid item xs={12} mt={6}>
                   <Typography component="h3" variant="h5" fontWeight={700}>مقالات {name}</Typography>
                   <Grid container spacing={2} mt={2}>
                       {posts.map((post)=>(
                           <Grid item xs={12} sm={6} md={4} key={post.id}>
                               <CardEl title={post.title}
                               coverphoto={post.coverphoto}
                               slug={post.slug}
                               />
                           </Grid>
                           ))}
                   </Grid>

               </Grid>

           </Grid>

       </Container>
    );
};

export default AuthorPage;