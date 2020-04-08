import React from 'react';

class SearchComponent extends React.Component {

    state = {
        searchTerm: ''
    }

    onChangeHandler = (event) => {
        this.setState({ searchTerm: event.target.value });
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchTerm);
    }

    render(){
        return (
            <div className="search-component">
                <form onSubmit={this.onSubmitHandler}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fas fa-search"></i>
                            </span>
                        </div>
                        <input 
                            type="text" 
                            value={this.state.searchTerm}
                            onChange={this.onChangeHandler}
                            className="form-control"
                            placeholder="Search for a country.."
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchComponent;