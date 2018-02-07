import React, { Component } from 'react';

import {firebaseKeys} from './conf';

var Rebase = require('re-base');
var firebase = require('firebase/app');
var database = require('firebase/database');

var app =firebase.initializeApp(firebaseKeys);
var db = firebase.database(app);
var base = Rebase.createClass(db);

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spottings: []
        }
    }
    componentDidMount () {
        base.fetch('spottings', {
            context: this,
            asArray: true,
            queries: {
                orderByChild: 'confirmed',
                equalTo: false
            },
            then(data){
                console.log(data);
                this.setState({
                    spottings: data
                });
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Sign In</h1>
                <div>
                    <input type="username" value="username" id="user"/>
                    <br/>
                    <input type="password" value="username" id="pass"/>
                </div>
                <h1>Feed</h1>
                <div>
                    {this.state.spottings.map((spotting) =>
                        <Spotting spotting={spotting} key={spotting.key}/>
                    )}
                </div>
            </div>
        )
    }
}false

class Spotting extends Component {
    render() {
        return (
            <img src={this.props.spotting.image}/>
        )
    }
}

export {
    Dashboard
};