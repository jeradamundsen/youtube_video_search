import React, { Component } from 'react';


class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }
onChange=(e)=>{
  this.setState({
    term: e.target.value
  })
}
onFormSubmit=(event)=>{
  event.preventDefault()
  this.props.onFormSubmit(this.state.term)
  //call callback from parent component
}
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="">Search Videos</label>
            <input
              type="text"
              onChange={this.onChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
      
    );
  }

}

export default SearchBar
