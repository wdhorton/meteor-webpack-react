/* global Template, ReactMeteorData */
import React, {Component} from 'react';
import reactMixin from 'react-mixin';
import BlazeTemplate from './BlazeTemplate';
import {Users, Posts} from 'collections';
import './App.css';

Meteor.call('sayHello', function(err, res) {
  console.log(res);
});

@reactMixin.decorate(ReactMeteorData)
export default class App extends Component {
  getMeteorData() {
    return {
      users: Users.find().fetch()
    };
  }

  render() {
    let userCount = Users.find().fetch().length;
    let postsCount = Posts.find().fetch().length;

    let loginButtons;
    if (!Meteor.isServer) loginButtons = <BlazeTemplate template={Template.loginButtons} />;

    return (
      <div className="App">
        {loginButtons}
        <h1>Hello Webpack!</h1>
        <p>There are {userCount} users in the Minimongo  (login to change)</p>
        <p>There are {postsCount} posts in the Minimongo  (autopublish removed)</p>
      </div>
    );
  }
}
