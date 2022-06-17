import React, {FC} from 'react';
import {Grid} from "@mui/material";
import User from "./User";
import {IUser} from "../../types/user";

interface UserListProps {
    users:IUser[];
    value:string;
    setIsOpen:(arg: string | number)=>void;
}

const UserList: FC<UserListProps> = ({users, value , setIsOpen}) => {

    return (
        <div>
            <Grid container spacing={2}>
                {users.filter((user) => {
                    if (value === '') {
                        return user
                    } else if (user.name.toLowerCase().includes(value.toLowerCase())) {
                        return user
                    }
                }).map((u) => (
                    <Grid key={u.id} item xs={12} sm={6} md={6} lg={4}>
                        <User setIsOpen={setIsOpen} user={u}/>
                    </Grid>
                ))}
            </Grid>
        </div>

    );
};

export default UserList;
