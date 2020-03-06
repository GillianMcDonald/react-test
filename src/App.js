import React  from "react";
import ReactDom from 'react-dom';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './Components/column';
import Navbar from "./Components/Navbar";


const Container = styled.div`
  display: flex;
`

class App extends React.Component{
  state = initialData;

  // onDragStart = () => {
  //   document.body.style.color = 'orange'; //remains orange after drag so onDragEnd reverts is
  //   document.body.style.transition = 'background-color 0.2s ease';
  // }

  // onDragUpdate = update => {
  //   const { destination } = update;
  //   const opacity = destination ? destination.index / Object.keys(this.state.tasks).length : 0;
  //   document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  // }

  onDragEnd = result =>{
    // document.body.style.color = 'inherit';
    // document.body.style.tbackgroundColor = 'inherit'; 

    const { destination, source, draggableId } = result;

    //if there is no destination we don't have to do anything 
    if (!destination) {
      return;
    }
    //if the destination and source are the same we don't need to do anything, it's back where it started
    if(destination.droppableId === source.droppableId && destination.index === source.index){
      return;
    }
    //reorder the tasks id's array for the column.  retrieve the column using the id of the droppable from the source object to look up the column from my state.  only works if you only have one column
    const startColumn = this.state.columns[source.droppableId];
    const finishColumn = this.state.columns[destination.droppableId];

   

    //MOVE WITHIN SAME COLUMN
    if (startColumn === finishColumn){
      //this will create a new task id's array with the same content as the existing array
    const newTicketIds = Array.from(startColumn.ticketIds);
    //move task id from it's old index to it's new index in the array 
    newTicketIds.splice(source.index, 1) //remove the item
    newTicketIds.splice(destination.index, 0, draggableId);//use splice again on the destination array but this time we don't take anything out, we insert the new task id which is the same as the draggable id

    //create a new column which has the same properties as the old column but with the new task id's array 
    const newColumn = {
      ...startColumn, 
      ticketIds: newTicketIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      },
    };

    this.setState(newState);
    return;
    }


     //TRYING TO MAKE IT WORKS WITH TICKETS
    //moving tasks from one column to another
    //create a new array which holds the same as the original 
    const startTicketIds = Array.from(startColumn.ticketIds); 
    //move task id from it's old index to it's new index in the array 
    startTicketIds.splice(source.index, 1);
    const newStart = {
      ...startColumn,
      ticketIds: startTicketIds,
    };

    //same for finish id's, eventually inserting the new taks id into the column
    const finishTicketIds = Array.from(finishColumn.ticketIds);
    finishTicketIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finishColumn, 
      ticketIds: finishTicketIds,
    };
    
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    this.setState(newState);
    return;
  };

  render() {
    return (
      <div>
        <Navbar />
    <DragDropContext 
    //onDragStart={this.onDragStart}
    // onDragUpdate={this.onDragUpdate}
    onDragEnd={this.onDragEnd}
    >
       <Container>
      {this.state.columnOrder.map(columnId => {
      const column = this.state.columns[columnId];
      const tickets = column.ticketIds.map(ticketId => this.state.tickets[ticketId]);
     
      return <Column key={column.id} column={column} tickets={tickets} />;
    })}
  
    </Container>
  
    </DragDropContext>  
    </div>
    )
  }
}

export default App;


