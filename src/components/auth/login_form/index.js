import { Button, Column, Control, Field, Input, Label, Help } from "rbx";
import React, {Fragment, useState} from "react";
import { Navigate } from "react-router-dom";
import usersService from "../../../services/users";

function LoginForm() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToNotes, setRedirectToNotes] = useState(false);
    const [redirectToRegister, setRedirectToRegister] = useState(false);
    const [error, setError] = useState(false);

    const HandleSubmit = async (e) =>{
        e.preventDefault();
            try {
                const user = await usersService.login({email: email, password:password});
                setRedirectToNotes(true)
            } catch (error) {
                setError(true)
            }
    }

    if (redirectToRegister){
        return <Navigate to={{pathname: '/register'}} />
    }else if (redirectToNotes){
        return <Navigate to={{pathname: '/notes'}} />
    }

    return (
        <Fragment>
            <Column.Group centered>
                <form onSubmit={HandleSubmit}>
                    <Column size={12}>
                        <Field>
                            <Label size='small'>Email: </Label>
                            <Control>
                                <Input
                                    type="email"
                                    name='email'
                                    required 
                                    value={email}
                                    onChange={e=> setEmail(e.target.value)} />
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
                                    onChange={e=> setPassword(e.target.value)} />
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <Column.Group breakpoint='mobile'>
                                    <Column>
                                        <a className="button is-white has-text-custom-purple"
                                            onClick={e=> setRedirectToRegister(true)}>Registre-se ou</a>
                                    </Column>
                                    <Column>
                                        <Button color="custom-purple" outlined>Login</Button>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>
                        { error && <Help color="danger">E-mail ou senha inválidos</Help> }
                    </Column>
                </form>
            </Column.Group>
        </Fragment>
    );
}

export default LoginForm;