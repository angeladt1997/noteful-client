'use strict';

// Create a new component AddFolder that implements a form to capture 
// the name of a new folder from the user. This form should submit the 
// name of the new folder to the POST /folders endpoint on the server. 
// Ensure that any errors are properly handled. Add a button to the 
// navigation to invoke the new form.

import React from 'react';
import './AddFolder.css';
import config from '../config';
import ApiContext from '../ApiContext';
import ValidationError from '../ValidationError';

export default class AddFolder extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			folderInput: {value: '', touched: false}
			}
		}

		static contextType = ApiContext;

		handleSubmit = (event) => {
			event.preventDefault();
			const {folderInput} = this.state;
			const folder = { name: folderInput.value}

			fetch(`${config.API_ENDPOINT}/folders/`, {
			method: 'POST',
			body:
				 JSON.stringify(folder),
			headers: {
				'content-type': 'application/json'
			},		
		})
			.then(res => {
				if(!res.ok)
					return res.json().then(e => Promise.reject(e))
				return res.json()
			})
			.then((data) => {
				this.contect.AddFolder(data)
				this.props.history.push(`/`)
			})
			.catch(error => {
				console.error({error})
			})
		}
		
		updateFolderName(folderInput) {
			this.setState({folderInput: {value: folderInput, touched: true}})
		}

		validateNewFolderName() {
			const newFolderName = this.state.value.trim();
			if(newFolder.length === 0) {
				return "Name me, please!";
			} else if (name.length <3) {
				return "I'd like a longer name!"
			}

		}

		// render() {
		// 	return (
		// 		<div>
		// 			<h2>Add Folder</h2>
		// 			<form className="newFolder">
		// 				<div className="folder-name"> 
		// 					<label htmlFor="name"> Folder Name * </label>
		// 					<input type="text" className="folderEntry"
		// 					name="folderName" id="folderName" ref={this.folderEntryInput} />
		// 					<button type="submit" className="newFolderAddButton" onClick={e => this.newFolder(e.target.calue)}> 
		// 					Add to Folders
		// 					</button>
		// 					<button type="delete" className="newFolderCancel">
		// 					Cancel Addition
		// 					</button>
		// 				</div>
		// 			</form>
		// 		</div>
		// 	)
	//	}
}
