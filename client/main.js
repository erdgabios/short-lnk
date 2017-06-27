import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';

import { routes, onAuthChange } from '../imports/routes/routes';


Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  Meteor.call('greetUser', (err, res) => {
    console.log('Greet User Argumnets', err, res);
  });
  ReactDOM.render(routes, document.getElementById('app'));

  Meteor.call('addNumbers', 10, 20, (err, res) => {
    console.log("addNumbers function", err, res);
  });
  ReactDOM.render(routes, document.getElementById('app'));
});
