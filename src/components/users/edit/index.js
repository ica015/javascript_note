import React, {Fragment} from "react";
import {Column, Menu} from 'rbx';
import Userform from '../form'
import '../../../styles/user-edit.scss';

const UserEdit = () =>{

    return(
        <Fragment>
            <Column.Group className="user-edit">
                <Menu className='user-menu-lateral'>
                    <Menu.Label>Opções</Menu.Label>
                    <Menu.List>
                        <Menu.List.Item>Atualizar Dados</Menu.List.Item>
                        <Menu.List.Item>Atualizar Senha</Menu.List.Item>
                        <Menu.List.Item>Excluir Conta</Menu.List.Item>
                    </Menu.List>
                </Menu>
                <Column size={9}>
                    <Userform />
                </Column>
            </Column.Group>
        </Fragment>
        
    )
}

export default UserEdit;