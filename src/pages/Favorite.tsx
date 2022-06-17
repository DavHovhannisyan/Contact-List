import React, {FC} from 'react';
import {Box, Container, Grid, IconButton} from "@mui/material";
import _ from "lodash";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import FavoriteItem from "../components/FavoriteItem";

const Favorite:FC = () => {
    const navigate = useNavigate();
    const {favorites} = useTypedSelector(state => state.user);

    return (
        <Container>
            <Box sx={{
                display:"flex",
                alignItems:"center"
            }}>
                <IconButton
                    sx={{
                        transform: "translate(-25px,25px)",
                        backgroundColor: "#f1f1ec",
                        width: 44,
                        height: 44,
                    }}
                    aria-label="localMall"
                    onClick={() => {
                        navigate('/')
                    }}
                >
                    <ArrowBackIcon sx={{color: "#5d5d62", fontSize: 30}}/>
                </IconButton>
                <h1>Back</h1>
            </Box>
            <Grid container spacing={2}>
                {_.map(favorites, (f, index) => (
                    <Grid key={index} item xs={12} sm={6} md={6} lg={4}>
                        <FavoriteItem index={index} user={f}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Favorite;
