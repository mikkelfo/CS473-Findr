import {Overlay} from "react-native-elements";
import UserInfo from "./UserInfo";
import React from "react";

export const UserOverlay = props => {
    return (
        <Overlay
            isVisible={props.visible}
            onBackdropPress={() => props.toggle() }
            width="auto"
            height="auto"
        >
            <UserInfo username={props.username}/>
        </Overlay>
    )
};