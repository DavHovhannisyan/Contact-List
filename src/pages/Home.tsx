import React, {FC, useCallback, useEffect, useState} from 'react';
import {Badge, Container, Grid, IconButton} from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {useNavigate} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import LoadingScreen from "../components/LoadingScreen";
import UserList from "../components/user/UserList";
import Modal from "../components/Modal";

const Home: FC = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState<string>('');
    const [isOpen, setIsOpen] = useState<string | number>('');
    const [size, setSize] = useState<number>(0);
    const {users, loading, error, favorites} = useTypedSelector(state => state.user);
    const {fetchUsers} = useActions();
    const user = users.find(u => isOpen === u.id);

    const closeModal = useCallback(() => {
        setIsOpen('')
    }, [])

    useEffect(() => {
        setSize(Object.keys(favorites).length);
    }, [favorites]);

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <LoadingScreen/>;
    }

    if (error) {
        return <h1>Server Error</h1>;
    }

    return (
        <>
            <Container>
                <Grid container justifyContent="space-between" alignItems={'center'}>
                    <Grid item xs={9} sm={9} md={9} lg={10}>
                        <input type="text" placeholder="Search by name" value={value} onChange={(ev) => {
                            setValue(ev.target.value)
                        }}/>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2}>
                        <Badge className={'badge'} color="error" overlap="circular" badgeContent={size.toString()}>
                            <IconButton
                                sx={{
                                    transform: "translate(-25px,25px)",
                                    backgroundColor: "#f1f1ec",
                                    width: 44,
                                    height: 44,
                                }}
                                aria-label="localMall"
                                onClick={() => {
                                    navigate('/favorites')
                                }}
                            >
                                <StarBorderIcon sx={{color: "#5d5d62", fontSize: 30}}/>
                            </IconButton>
                        </Badge>
                    </Grid>
                </Grid>
                <UserList users={users} value={value} setIsOpen={setIsOpen}/>
            </Container>
            {isOpen ? (
                <Modal user={user} closeModal={closeModal}/>
            ) : null}
        </>
    );
};

export default Home;


