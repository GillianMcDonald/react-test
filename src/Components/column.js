import React from 'react';
import styled from 'styled-components';
import Ticket from './Ticket'
import { Droppable } from 'react-beautiful-dnd';
 
const Container = styled.div`
    margin: 8px;
    width: 360px; 
    display: flex; 
    flex-direction: column;
`;
const Title = styled.h3`
    padding: 8px;
    text-align: center;
    `;
const TicketList = styled.div`
    padding: 8px;
    background-color: ${props => (props.isDraggingOver ? 'lightgray' : 'white')};
    // the below extends the droppable area to the 
    flex-grow: 1; 
    //this min height for droppable components, otherwise if there were no items in the list it would be 0 height 
    min-height: 100px; 
    min-width: 340px; 
    justify-content: center;
    text-align: center;
`;

const Create = styled.div`
    display: flex;
    justify-content: space-between;
    border: 2px solid lightgrey;
    font-size: 15px;
    padding-left: 20px;
    margin-left: 10px;
    width: 100px;
    border-radius: 5%;
    `;

const Text = styled.div`
padding-top: 15px;
`;

const Plus = styled.div`
padding-left: 13px;
padding-bottom: 8px;
`;


export default class Column extends React.Component {
    render () {
        return (
            <Container>
                 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <Title>{this.props.column.title}</Title>
                <Create>
                <Text>Create</Text>
                <Plus><i class="fa fa-plus-circle fa-2x"></i></Plus>
                </Create>
                <Droppable droppableId={this.props.column.id}>
                    {(provided, snapshot) => (
                        <TicketList 
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                        >
                        
                        {this.props.tickets.map((ticket, index) => (
                        <Ticket key={ticket.id} ticket={ticket} index={index}/>
                        ))}
                        {provided.placeholder}
                        </TicketList>
                        )}
                </Droppable>
            </Container>
        );
    }
}

