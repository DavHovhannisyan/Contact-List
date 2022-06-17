import React, {FC} from 'react';
import {Grid, Paper} from "@mui/material";
import {IUser} from "../types/user";

interface FavoriteProps{
    index:string;
    user:IUser;
}

const FavoriteItem: FC<FavoriteProps> = ({index,user}) => {
    return (
        <div className="item-block">
            <Paper sx={{
                padding: "15px",
                borderRadius: "10px"
            }} elevation={2}>
                <Grid container>
                    <Grid item xs={6} sm={12} md={12} lg={12}>
                        <img className="item-img" src={`/img/${index}.jpg`} alt=""/>
                    </Grid>
                    <Grid item xs={6} sm={12} md={12} lg={12}>
                        <div className="item-info">
                            <h2>{user?.name}</h2>
                            <p>{user?.phone}</p>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default FavoriteItem;
