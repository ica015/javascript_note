import { Card, Column, Container, Section, Title } from "rbx";
import React, {Fragment} from "react";
import Header from "../../../components/header";
import logoImage from '../../../assets/images/logo.png';
import '../../../styles/auth.scss';
import LoginForm from '../../../components/auth/login_form' 

const LoginScreen = ()=>(
    <Fragment>
        <Header/>
        <Section className="auth">
            <Container>
                <Column.Group centered>
                    <Column size={3}>
                        <Card>
                            <Card.Content>
                                <Section>
                                    <Column.Group centered>
                                        <Column size={12}>
                                            <img src={logoImage}/>
                                        </Column>
                                    </Column.Group>
                                    <Column.Group centered>
                                        <Column size={12}>
                                            <Title size={6} className='has-text-gray has-text-cetered'>
                                                Suas notas nas núvens
                                            </Title>
                                        </Column>
                                    </Column.Group>
                                    <LoginForm/>
                                </Section>
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
);

export default LoginScreen;