import React from 'react';
import { connect } from 'react-redux';

import UserComponent from '../components/usersComponent.jsx';
import { getUsers } from '../../store/users/actions.js';

class UsersContainer extends React.Component {
    state = {
        users: this.props.search
    }

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return <UserComponent 
                    users={this.props.search.search ? this.props.search.search : this.props.users.users}> 
                </UserComponent>;
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        search: state.search,
    }
}

const mapDispatchToProps = {
    getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);