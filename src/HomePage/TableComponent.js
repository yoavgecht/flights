import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Route } from 'react-router-dom'

class TableComponent extends Component {
     constructor(props){
        super(props);
        this.state = {flights: [
                        {
                            from: 'Tel Aviv',
                            to: "London",
                            departureTime: new Date(120234213123),
                            landingTime: new Date(12022398213123),
                            price: '100$'
                        }, 
                        {
                            from: 'Berlin',
                            to: "Amsterdam",
                            departureTime: new Date(120234213123),
                            landingTime: new Date(12022398213123),
                            price: '200$'
                        },
                        {
                            from: 'Rome',
                            to: "Paris",
                            departureTime: new Date(120234213123), 
                            landingTime: new Date(12022398213123),
                            price: '300$'
                        }
                    ]};
   
    }
    
    render() {
    return (
        <div>
            <BootstrapTable ref='table' data={ this.state.flights }>
                <TableHeaderColumn dataField='from' isKey={ true } dataSort={ true }>From</TableHeaderColumn>
                <TableHeaderColumn dataField='to' dataSort={ true }>To</TableHeaderColumn>
                <TableHeaderColumn dataField='departureTime' dataSort={ true }>Departure Time</TableHeaderColumn>
                <TableHeaderColumn dataField='landingTime' dataSort={ true }>Landing Time</TableHeaderColumn>
                <TableHeaderColumn dataField='price' dataSort={ true }>Price</TableHeaderColumn>
            </BootstrapTable>
            
                    <Route render={({ history}) => (
                        <button className="btn btn-primary" type='button' onClick={() => { history.push('/add-flight') }}> Add Flight </button>
                    )} />
                    
          
        </div>
      )
    }
};
    

export default TableComponent;