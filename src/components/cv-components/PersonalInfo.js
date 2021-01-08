import React, { Component } from 'react'
import Email from './Email';
import Github from './Github';
import LinkedIn from './LinkedIn';
import Location from './Location';
import Phone from './Phone';

export class PersonalInfo extends Component {
    render() {
        return (
            <div>
                <Location></Location>
                <Phone></Phone>
                <Email></Email>
                <LinkedIn></LinkedIn>
                <Github></Github>
            </div>
        )
    }
}

export default PersonalInfo
