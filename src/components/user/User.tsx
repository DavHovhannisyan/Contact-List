import React, {FC} from 'react';
import {Grid, Paper} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import {useActions} from "../../hooks/useActions";
import {IUser} from "../../types/user";

interface UserProps {
    user:IUser;
    setIsOpen:(arg: string | number)=>void;
}


const User: FC<UserProps> = ({setIsOpen,user}) => {


    const {setActive,setFavorite, deleteFavorite } = useActions()

    const setFavoriteList = () => {
        if(user.active){
            setFavorite(user)
        }else{
            deleteFavorite(user.id)
        }
    }

    return (
        <div className="item-block" onClick={() => {
            setIsOpen(user.id)
        }}>
            <Paper sx={{
                padding: "15px",
                borderRadius: "10px"
            }} elevation={2}>
                <Grid container item>
                    <Grid container item xs={10} sm={10} md={10} lg={10}>
                        <Grid item xs={6} sm={12} md={12} lg={12}>
                            <img className="item-img" src={`/img/${user.id}.jpg`} alt=""/>
                        </Grid>
                        <Grid item xs={6} sm={12} md={12} lg={12}>
                            <div className="item-info">
                                <h2>{user?.name}</h2>
                                <p>{user?.phone}</p>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2}>
                        <StarIcon onClick={(ev)=>{
                            ev.stopPropagation();
                            setFavoriteList()
                            setActive(user.id)
                        }} className={user.active ? "red" : "dark-red"} sx={{fontSize: "30px"}}/>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default User;
