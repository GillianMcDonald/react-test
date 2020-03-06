import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import '@atlaskit/css-reset';

const Container = styled.div`
height: 221px;
width: 340px;
background-color: #ffffff;
color: #6d6d6d;
border-radius: 3px;
box-shadow: 0px 0px 5px 5px #f4f4f4;
top: 500px;
left: 500px;
background-color: ${props => (props.isDragging ? 'orange' : 'white')}; 
margin-bottom: 10px;
`;

const CardTop = styled.div`
height: 134px;
border-bottom: 1px solid #f4f4f4;
display: flex;
flex-wrap: wrap;
padding-bottom: 30px;
justify-content: center;
`;

const CardTitle = styled.div`
    padding: 30px 0px 0px 20px;
    font-size: 24px;
    text-align: center;
    justify-content: center;
`;  

const SerialNumberBox = styled.div`
height: 34px;
width: 120px;
background-color: #007eec;
border-radius: 4px;
margin-top: 20px;
//margin-left: 24px;
display: flex;
text-align: center;
`;

const SerialNumber = styled.div`
color: white;
font-size: 12px;
padding: 10px 0px 10px 20px;
`;

const DateBox = styled.div`
height: 30px;
width: 120px;
background-color: white;
border: 2px solid #6d6d6d;
border-radius: 4px;
display: flex;
margin-top: 20px;
margin-left: 16px;
`;

const Date = styled.div`
font-size: 12px;
padding: 8px 0px 10px 12px;
`;

const CardBottom = styled.div`
display: flex;
justify-content: space-evenly;
`;

const Circle = styled.div`
    margin-top: 13px;
    background-color: lightgrey;
    border-radius: 50%;
    border: none;
    height: 35px;
    width: 35px;
    font-size: 23px;
`;




export default class Ticket extends React.Component {
   
    render() {
    return (
        <Draggable draggableId={this.props.ticket.id} index={this.props.index}>
            {(provided, snapshot) => ( //snapshot contains properties to style draggable component during a drag
            <Container id="container"
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}
                >
                
                <div class="card" id="draggable" >
                    <CardTop className="cardTop">
                        <CardTitle className="cardTitle">{this.props.ticket.custName}</CardTitle>
                        <SerialNumberBox className="serialNumberBox">
                            <SerialNumber className="serialNumber">{this.props.ticket.SerialNo}</SerialNumber>
                        </SerialNumberBox>
                        <DateBox className="dateBox">
                            <Date className="date">{this.props.ticket.Date}</Date>
                        </DateBox>
                    </CardTop>
                    <CardBottom className="cardBottom">
                        <Circle id="circle1">W</Circle>
                        <Circle id="circle2">H</Circle>
                        <Circle id="circle3">U</Circle>
                        <Circle id="circle4">N</Circle>
                    </CardBottom>
                </div>
            </Container>
      )}
         
    </Draggable>
        );
    }
}

