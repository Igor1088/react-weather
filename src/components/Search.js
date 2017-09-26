import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ location: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.location);
    this.setState({ location: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="City, County"
          value={this.state.location}
          onChange={this.handleChange}
        />
        <button className="btn"><i className="fa fa-search" aria-hidden="true"></i></button>
      </form>
    );
  }
}

Search.propTypes = {
  handleSubmit: PropTypes.func
};

export default Search;
