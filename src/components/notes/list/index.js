import React, {Fragment} from 'react';
import Moment from 'moment';
import { Column, List, Title, Tag, Button } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function ListNotes(props){

    return(
        <Fragment>
            <Column.Group breakpoint='mobile'>
                <Column size={6} offiset={1}>
                    <Title size={6}>
                        {props.notes.length} Nota(s)
                    </Title>
                </Column>
                <Column size={2}>
                    <Button state='active' color='custom-purple' outlined size='small' onClick={()=> props.createNote()}>
                        Nova Nota    
                    </Button> 
                </Column>
            </Column.Group>
            <List className="notes-list">
                {props.notes.map((item, key) =>
                <List.Item key={key} onClick={()=>props.selectNote(item._id)} active={item == props.currentNote}>
                    <Title size={6}>
                        {item.title.replace(/(<([^>]+)>)/ig, "").substring(0,15)}
                    </Title>
                    <Title size={6} spaced={false} subtitle>
                        {item.body.replace(/(<([^>]+)>)/ig, "").substring(0,30)}
                    </Title>
                    <Column.Group breakpoint='mobile'>
                        <Column size={10}>
                            <Tag color='dark'>
                                {Moment(item.created_at).format('DD/MM/YYYY')}
                            </Tag>
                        </Column>
                        <Column size={2}>
                            <FontAwesomeIcon 
                                icon={faTrash}
                                onClick={()=> props.deleteNote(item)}
                                color='gray' />
                        </Column>
                    </Column.Group>
                </List.Item>
                )}
            </List>
        </Fragment>
    );
}

export default ListNotes;