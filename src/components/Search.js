import React, { Component} from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ location: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onHandle(this.state.location);
    this.setState({location: ''});
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>I want to know the weather for
          <input
            type="text"
            placeholder="City,Country"
            value={this.state.location}
            onChange={this.handleChange}
          />
        </label>
        <button className="btn btn-primary">Search</button>
      </form>
      </div>
    );
  }
}

export default Search;
