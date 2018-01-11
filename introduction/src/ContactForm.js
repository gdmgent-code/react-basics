import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = { name: '', essay: '', flavor: '', technologies: [] };
  }

  componentDidMount() {
    console.log('ContactForm component is mounted!');
  }

  componentWillUnmount() {
  }

  handleChangeName = (event) => {
    this.setState({name: event.target.value.toUpperCase()});
  }

  handleChangeEssay = (event) => {
    this.setState({essay: event.target.value.toUpperCase()});
  }

  handleChangeFlavor = (event) => {
    this.setState({flavor: event.target.value.toUpperCase()});
  }

  handleChangeTechnologies = (event) => {
    this.setState({technologies: [].slice.call(event.target.selectedOptions).map(o => {
      return o.value;
    })});
  }

  handleChange = (event) => {
    const target = event.target;
    const type = target.type;
    const name = target.name;
    let value = null;

    switch(type) {
      case 'checkbox':
        value= target.checked;
        break;
      case 'checkbox':
        value= target.checked;
        break;
    }

    this.setState({
      [name]: value
    });
  } // todo

  handleSubmit = (event) => {
    console.log('A form was submitted: ' + this.state.name);
    console.log(`Selected file - ${
      this.fileInput.files[0].name
    }`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChangeName} />
        </label>
        <label>
          Essay:
          <textarea value={this.state.essay} onChange={this.handleChangeEssay} />
        </label>
        <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.flavor} onChange={this.handleChangeFlavor}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <label>
          Pick technologies:
          <select multiple={true} value={this.state.technologies} onChange={this.handleChangeTechnologies}>
            <option value="html">Html</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
          </select>
        </label>
        Upload file:
        <input
          type="file"
          ref={input => {
            this.fileInput = input;
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ContactForm;
