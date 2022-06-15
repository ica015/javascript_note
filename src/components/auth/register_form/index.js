import React, {Fragment, useState} from "react";
import {Button, Field, Control, Input, Column, Section, Help, Label} from 'rbx';
import { Navigate } from 'react-router-dom';
import usersService from "../../../services/users";

function RegisterFrom() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [error, setError] = useState(false);

    const HandleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const user = await usersService.register({name:name, email:email, password: password})
            setRedirectToLogin(true);
        } catch (error) {
            setError(true);
        }
        
    }

    if (redirectToLogin){
        return <Navigate to={{pathname:'/login'}} />
    }

    return(
        <Fragment>
            <Column.Group centered>
                <form onSubmit={HandleSubmit}>
                    <Column size={12}>
                        <Field>
                            <Label size='small'>Name: </Label>
                            <Control>
                                <Input 
                                    type='name'
                                    name='name' 
                                    required
                                    value={name}
                                    onChange={e => setName(e.target.value)} />
                            </Control>
                        </Field>
                        <Field>
                            <Label size='small'>Email: </Label>
                            <Control>
                                <Input 
                                type="email" 
                                name="email" 
                                required 
                                value={email}
                                onChange={e => setEmail(e.target.value)} />
                            </Control>
                        </Field>
                        <Field>
                            <Label size='small'>Senha: </Label>
                            <Control>
                                <Input 
                                type='password' 
                                name='password' 
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)} />
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <Column.Group breakpoint='mobile'>
                                    <Column>
                                        <a 
                                            className="button is-white has-text-custom-purple"
                                            onClick={e => setRedirectToLogin(true)} >Login ou 
                                        </a>
                                    </Column>
                                    <Column>
                                        <Button className="custom-purple" outlined>Registre-se</Button>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>
                        {error && <Help color="danger">Email ou senha inválidos</Help>}
                    </Column>
                </form>
            </Column.Group>
        </Fragment>
    );
}

export default RegisterFrom;