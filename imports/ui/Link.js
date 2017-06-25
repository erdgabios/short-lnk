import React from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class Link extends React.Component {
  onLogout() {
    Accounts.logout();
  }
  render() {
    return (
      <div>
        <p>Link component goes here</p>
        <button onClick={this.onLogout.bind(this)}>LOGOUT</button>
      </div>
    );
  }
}
