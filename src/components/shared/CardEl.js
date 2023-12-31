import React from 'react';
import {Link} from "react-router-dom"
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Avatar,
    Typography,
    Divider,
    Button
} from "@mui/material";

const CardEl = ({title,slug,coverphoto,author}) => {
    return (
        <Card sx={{boxShadow:"rgba(0,0,,0.1) 0px 4px 12px" , borderRadius:4}}>
            {author &&
                <CardHeader
                    avatar={<Avatar src={author.avatar.url} sx={{marginLeft:2}}/>}
                    title={
                        <Typography
                            component="p" variant="p" color="text.secondary">{author.name}
                        </Typography>}

                />}

            <CardMedia
                component="img" height="194"  image={coverphoto.url} alt={slug}/>
            <CardContent>
                <Typography
                    component="h3" variant="h6" color="text.primary" fontWeight={600}>{title}
                </Typography>
            </CardContent>
            <Divider variant="middle" sx={{margin:"10px", textDecoration:"none"}}/>
            <CardActions>
                <Link to={`/blogs/${slug}`} style={{ width:"100%"}}>
                <Button variant="outlined" size="small" sx={{borderRadius:3 , width:"100%"}}>مطالعه مقاله</Button>
                </Link>
            </CardActions>

        </Card>
    );
};

export default CardEl;