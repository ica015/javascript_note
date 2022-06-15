import React, { Fragment } from "react";
import presentationImage from '../../assets/images/presentation.png';
import Header from "../../components/header";
import { Column, Section, Title, Container } from "rbx";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import '../../styles/home.scss'
import { Link } from "react-router-dom";

const HomeScreen = () => (
    <Fragment>
        <Header/>
        <Section size='medium' className='home'>
            <Container>
                <Column.Group>
                    <Column size={5}>
                        <Title size={2} spaced className="has-text-white">
                            Crie facilmente suas notas e acesse quando quiser na núvem.
                        </Title>
                        <Title size={5} spaced className="has-text-light" subtitle>
                            Aqui vai a descrição do site. A princípio foi usado somente lorenipsum.
                            Bla bla bla 
                            bla bla Bla
                        </Title>
                        <Link to='/register' className="button is-outlined is-white is-large">
                            <strong>Registre grátis agora</strong>
                        </Link>
                    </Column>
                    <Column size={6} offset={1}>
                        <img src={presentationImage}/>
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
)

export default HomeScreen;