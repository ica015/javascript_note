import React, {Fragment} from "react";
import UserEdit from "../../../components/users/edit";
import HeaderLogged from "../../../components/header_logged";

const UsersEditScreen = ()=>(
    <Fragment>
        <HeaderLogged />
        <UserEdit />
    </Fragment>
);

export default UsersEditScreen;