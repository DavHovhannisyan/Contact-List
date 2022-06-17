import React, {FC} from 'react';
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {IUser} from "../types/user";

interface ModalProps {
    user:IUser;
    closeModal: () => void;
}

const Modal:FC<ModalProps> = ({user,closeModal}) => {

    return (
        <div  className="modal">
            <div className="modal-context">
                <h3>User information </h3>
                <ul>
                    <li><span>Name:</span> {user?.name} </li>
                    <li><span>Email:</span> {user?.email} </li>
                    <li><span>Phone:</span> {user?.phone} </li>
                    <li><span>Address:</span> {user?.address.street} </li>
                    <li><span>Website:</span> {user?.website} </li>
                </ul>
                <button onClick={() => {
                    closeModal()
                }}>
                    <CloseOutlinedIcon sx={{fontSize: "20px", color: "#2b4350"}}/>
                </button>
            </div>
        </div>
    );
};

export default Modal;
