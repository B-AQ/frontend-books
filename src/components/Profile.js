import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react'

export class Profile extends Component {
    render() {
        const {user} = this.props.withAuth0;
        return (
            <div>
                <h1>123</h1>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <img src={user.picture} alt=""/>
                
            </div>
        )
    }
}

export default withAuth0(Profile);
