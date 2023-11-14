import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_POST_COMMENTS} from "../../graphql/Queries";
import {Avatar, Box, Grid, Typography} from "@mui/material";

const Comments = ({slug}) => {
    const {loading,data,errors}=useQuery(GET_POST_COMMENTS,{
        variables:{slug},
    });
    console.log(data)
    if (loading) return "null";
    if (errors) return "errors";
    return (
        <Grid container  sx={{boxShadow:"rgba(0,0,0,0.1) 0px 4px 12px" ,borderRadius:4 , py:1 ,mt:5}}>
            <Grid item xs={12} m={2}>
                <Typography  component="p" variant="h6" color="primary" fontWeight={700}>کامنت ها</Typography>
                {data.comments.map((comment) =>(
                    <Grid item xs={12} p={2} m={2} key={comment.id} border="1px silver solid" borderRadius={2}>
                        <Box component="div" display={"flex"} alignItems="center" mb={3}>
                            <Avatar>{comment.name[0]}</Avatar>
                            <Typography component="span" variant="p" fontWeight={700} mr={2}>{comment.name}</Typography>
                            <Typography component="p" variant="p">{comment.text}</Typography>
                        </Box>
                    </Grid>

                ))};
            </Grid>

        </Grid>

    );
};

export default Comments;