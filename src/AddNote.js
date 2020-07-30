import React from 'react'
import PropTypes from 'prop-types';


class AddNote extends React.Component {
  //create AddNote component
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: '',
        touched: false,
      },
      content: {
        value: ''
      },
      folder: {
        value: '' /*dropdown list to be populated*/
      }
    };
  }
  updateName(name) {
    this.setState({ name: { value: name, touched: true } });
  }
  updateContent(content) {
    this.setState({content: {value: content}});
  }
  updateFolder(folder) {
    this.setState({folder: {value: folder}});
  }
  handleSubmit(event) {
    event.PreventDefault();
    const { name, content, folder } = this.state;

    console.log('Name: ', name.value);
    console.log('Content:', content.value);
    console.log('Folder:', folder.value);
  }
  validateName() {
    const noteName = this.state.name.value.trim();
    if (noteName === 0) {
      return 'Name is required';
    }
  }
  render() {
    const noteNameError = this.ValidateName();
    const folderList= [];

    return(
      <form className="new-note" action="https://www.notes.com" method="POST" onSubmit={e => this.handleSubmit(e)}>
          <h2>Add New Note</h2>
          <div className="note-name">
            <p>* required field</p>
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              className="note-new"
              name="name"
              id="name"
              onChange={e => this.updateName(e.target.value)}
              />
              {this.state.name.touched && noteNameError}
          </div>
          <div className="note-content">
            <label htmlFor="content">Content</label>
            <input
              type="text"
              className="note-new"
              name="folder"
              id="folder"
              onChange={e => this.updateContent(e.target.value)}
              />
          </div>
          <div className="note-folder">
          <label htmlFor="folder"></label>
          <select name="folders" id="folders" required>
            <option value="folder1">Folder1</option>
            <option value="folder2">Folder2</option>
            <option value="folder3">Folder3</option>
            <option value="folder4">Folder4</option>
          </select>
          </div>

      </form>
    )
  }
}
//map list of folder
export default AddNote;
//add validation to prevent note name === empty string
//render form
//form should include input for name, content and folder (folder path or folder name??--list of existing folders--dropdown list?)
//submit form to POST /notes endpoint

//handle errors

//add button to note list page to invoke form