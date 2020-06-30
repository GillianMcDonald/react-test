const initialData = {
   
    tickets: {
        'ticket-1' : {id: 'ticket-1', content: 'Witt Gas Ticket 1', custName: 'First Customer Today', SerialNo: 'SN: 123456', Date: '5th March 2020', },
        'ticket-2' : {id: 'ticket-2', content: 'Witt Gas Ticket 2', custName: 'Witt Gas Best Customer', SerialNo: 'SN: 678910', Date: '1st April 2020', },
        'ticket-3' : {id: 'ticket-3', content: 'Witt Gas Ticket 3', custName: 'Witt Gas Worst Customer', SerialNo: 'SN: 343434', Date: '1st January 2000', },
        'ticket-4' : {id: 'ticket-4', content: 'Witt Gas Ticket 4', custName: 'Lucky Customer 100', SerialNo: 'SN: 202020', Date: '29th February 2021', },
        'ticket-5' : {id: 'ticket-5', content: 'Witt Gas Ticket 5', custName: 'Last Customer Today', SerialNo: 'SN: 555555', Date: '6th March 2020', },
        'ticket-6' : {id: 'ticket-6', content: 'Witt Gas Ticket 6', custName: 'Witt Gas Funniest Customer', SerialNo: 'SN: 666666', Date: '2nd April 2020'},
        'ticket-7' : {id: 'ticket-7', content: 'Witt Gas Ticket 7', custName: 'Witt Gas Smelliest Customer', SerialNo: 'SN: 777777', Date: '3rd January 2000', },
        'ticket-8' : {id: 'ticket-8', content: 'Witt Gas Ticket 8', custName: 'UnLucky Customer 200', SerialNo: 'SN: 888888', Date: '1st February 2021', },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Awaiting Inspection',
            ticketIds: ['ticket-1', 'ticket-2', 'ticket-3',],
        },
        'column-2': {
            id: 'column-2',
            title: 'Inspection In Progress',
            ticketIds: ['ticket-4'],
        },
        'column-3': {
            id: 'column-3',
            title: 'Awaiting Parts',
            ticketIds: [],
        },
        'column-4': {
            id: 'column-4',
            title: 'Awaiting Order No.',
            ticketIds: ['ticket-5', 'ticket-6',],
        },
        'column-5': {
            id: 'column-5',
            title: 'Awaiting Payment',
            ticketIds: [ 'ticket-7'],
        },
        'column-6': {
            id: 'column-6',
            title: 'Awaiting Something Else',
            ticketIds: [ 'ticket-8'],
        },
    },
    //Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5', 'column-6'],
};

export default initialData; 


