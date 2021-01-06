import React, { Component } from 'react'
import { GoMarkGithub} from "react-icons/go";
import {AiFillPhone, AiFillLinkedin} from "react-icons/ai";
import {ImLocation} from "react-icons/im";
import {IoIosMail } from "react-icons/io";

export class PersonalInfo extends Component {
    render() {
        return (
            <div>
                <GoMarkGithub className="text-xl m-2"/>
                <AiFillPhone  className="text-xl m-2"/> 
                <ImLocation  className="text-xl m-2"/>
                <AiFillLinkedin  className="text-xl m-2"/>
                <IoIosMail  className="text-xl m-2"/>
            </div>
        )
    }
}

export default PersonalInfo
