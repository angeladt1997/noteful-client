// Create a new component AddFolder that implements a form to capture 
// the name of a new folder from the user. This form should submit the 
// name of the new folder to the POST /folders endpoint on the server. 
// Ensure that any errors are properly handled. Add a button to the 
// navigation to invoke the new form.

import React from 'react';
import './AddFolder.css';
//import ReactDOM from 'react-dom'
//import ApiContext from '../ApiContext';

export default class AddFolder extends React.Component {
	constructor(props) {
		super(props);
		this.state ={
			newFolder: {
				value: ' ',
			},

		addNewFolder(newFolder) {
			this.setState({newFolder : {value: newFolder}});
		}
		// handleSubmit(event) {
		// 	event.preventDefault();
		// 	const newFolder = event.folderEntryInput.current.value;
		// }

		// handleDelete(eventTwo) {
		// 	event.preventDefault();
		// 	const noNewFolder = event.
		// }

		render() {
			return (
				<div>
					<h2>Add Folder</h2>
					<form className="newFolder">
						<div className="folder-name"> 
							<label htmlFor="name"> Folder Name * </label>
							<input type="text" className="folderEntry"
							name="folderName" id="folderName" ref={this.folderEntryInput} />
							<button type="submit" className="newFolderAddButton" onClick={e => this.newFolder(e.target.calue)}> 
							Add to Folders
							</button>
							<button type="delete" className="newFolderCancel">
							Cancel Addition
							</button>
						</div>
					</form>
				</div>
			)
		}
}