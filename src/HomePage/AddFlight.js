import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

class AddFlight extends Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }
    
    render() {
    return (
        <div>
            ADD FLIGHT COMPONENT - FORM WITH AUTH THAT WILL ADD FLIGHT TO THE ARRAY     
        </div>
      )
    }
};

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedAddFlight = connect(mapStateToProps)(AddFlight);
export { connectedAddFlight as AddFlight };
export default AddFlight;