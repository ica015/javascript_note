import React, { useState } from 'react';
import { Button } from "rbx";
import UsersService from '../../../services/users';
import { Navigate } from "react-router-dom";

function UsersDelete() {
    const [redirectToHome, setRedirectToHome] = useState(false);

    const deleteUser = async () => {
        if (window.confirm('Tem certeza que deseja excluir sua conta? \nEsta ação  não poderá ser desfeita')) {
            await UsersService.delete()
            setRedirectToHome(true)
        }
    }

    if (redirectToHome)
        return <Navigate to={{ pathname: "/" }} />

    return (
        <Button color="danger" onClick={() => deleteUser()}>
            Excluir conta
        </Button>
    )
}

export default UsersDelete;