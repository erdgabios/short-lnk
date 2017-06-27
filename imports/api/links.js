import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer){
  Meteor.publish('links', function () {
    return Links.find({userId: this.userId});
  });
}

Meteor.methods({
  greetUser (name = 'User(default)') {
    console.log("greetUser is running");

    if(!name) {
      throw new Meteor.Error('invalid-arguments', 'Name is required');
    }
    return `Hello ${name}`;
  }
});

Meteor.methods({

  addNumbers(number1 = 3, number2 = 5) {
    console.log("Adding 2 numbers is running");

    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
      throw new Meteor.Error('invalid-numbers', "At least 1 of number1 or number2 is not a number");
    }

    return `${number1} + ${number2} = ${number1 + number2}`;

  }
});
