import React, { Component } from 'react';
import NameInput from './NameInput';
import SmallBio from './SmallBio';
import PersonalInfo from './PersonalInfo';

export class CVHeader extends Component {
	render() {
		return (
			<div>
				<NameInput></NameInput>
                <SmallBio></SmallBio>
				<PersonalInfo></PersonalInfo>
			</div>
		);
	}
}

export default CVHeader;
