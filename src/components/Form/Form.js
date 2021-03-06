import React, { Component } from 'react';
import style from './Form.module.css';
import { v4 as uuidv4 } from 'uuid';

class Form extends Component {
  state = {
    name: '',
    nickName: '',
    experience: 'Trainee',
    license: false,
  };

  nameInputId = uuidv4();
  nickNameInpuutId = uuidv4();

  handleChange = evt => {
    // console.log(evt.currentTarget);
    // console.log(evt.currentTarget.name);
    // console.log(evt.currentTarget.value);
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleLicenseChange = e => {
    console.log(e.currentTarget.checked);
    this.setState({ license: e.currentTarget.checked });
  };

  reset = () => {
    this.setState({ name: '', nickName: '' });
  };

  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            id={this.nameInputId}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor={this.nickNameInpuutId}>
          NickName:
          <input
            type="text"
            name="nickName"
            value={this.state.nickName}
            id={this.nickNameInpuutId}
            onChange={this.handleChange}
          />
        </label>
        <div>
          <h5 className={style.title}>Your IT-level</h5>
          <div className={style.radioBar}>
            <label>
              Trainee
              <input
                type="radio"
                name="experience"
                value="Trainee"
                checked={this.state.experience === 'Trainee'}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Junior
              <input
                type="radio"
                name="experience"
                value="Junior"
                checked={this.state.experience === 'Junior'}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Middle
              <input
                type="radio"
                name="experience"
                value="Middle"
                checked={this.state.experience === 'Middle'}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Senior
              <input
                type="radio"
                name="experience"
                value="Senior"
                checked={this.state.experience === 'Senior'}
                onChange={this.handleChange}
              />
            </label>
          </div>
        </div>
        <div className={style.checkbox}>
          <label>
            <input
              type="checkbox"
              name="license"
              checked={this.state.license}
              onChange={this.handleLicenseChange}
            />
            Agree with conditions
          </label>
        </div>
        <button
          className={style.button}
          type="submit"
          disabled={!this.state.license}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
