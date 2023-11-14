import React from 'react';
import {useParams,useNavigate} from "react-router-dom";
import {GET_POST_INFO} from "../../graphql/Queries";
import {useQuery} from "@apollo/client";
import Loader from "../shared/Loader";
import {Avatar, Box, Container, Grid, Typography} from "@mui/material";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import sanitizeHtml from "sanitize-html";
import CommentForm from "../comment/CommentForm";
import Comments from "../comment/Comments";


const BlogPage = () => {
    const navigate=useNavigate();
    const {slug}=useParams();
    const {loading,data,errors}=useQuery(GET_POST_INFO ,{
        variables:{slug},
    });
    if (loading) return <Loader/>
    if (errors) return <h1>errors</h1>
    console.log(data)
    return (
        <Container maxWidth={"lg"}>
            <Grid container>
                <Grid item mt={9} xs={12} display="flex" justifyContent="space-between">
                    <Typography component="h2" variant="h4" color="primary" fontWeight={700}>
                        {data.post.title}
                    </Typography>
                    <ArrowBackRoundedIcon onClick={()=>navigate(-1)}/>
                </Grid>
                <Grid item xs={12} mt={6}>
                    <img src={data.post.coverphoto.url} alt={data.post.slug}  width="100%" style={{borderRadius:15}}/>
                </Grid>
                <Grid item  xs={12} mt={7} display="flex" alignItems="center">
                    <Avatar src={data.post.author.avatar.url} sx={{width:80,height:80,marginLeft:2}}/>
                    <Box component="div">
                    <Typography component="p" variant="h5" fontWeight={700}>{data.post.author.name}</Typography>
                    <Typography component="p" variant="p" color="text.secondary">{data.post.author.field}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} mt={5}>
                    <div dangerouslySetInnerHTML={{__html:sanitizeHtml(data.post.content.html)}}></div>

                </Grid>
                <Grid item xs={12}>
                    <CommentForm slug={slug}/>
                </Grid>
                <Grid item xs={12}>
                    <Comments slug={slug}/>
                </Grid>

            </Grid>

        </Container>
    );
};

export default BlogPage;