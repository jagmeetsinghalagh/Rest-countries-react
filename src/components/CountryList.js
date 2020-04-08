import React from 'react';

import SearchComponent from './SearchComponent';
import FilterComponent from './FilterComponent';
import CountryListHelper from './CountryListHelper';
import './countrylist.css';

class CountryList extends React.Component {

    state = {
        countries: [],
        isLoading: false
    }

    componentDidMount(){
        this.setState({ isLoading: true });
        fetch('https://restcountries.eu/rest/v2/all')
            .then(result => result.json())
            .then(data => this.setState({ countries: data, isLoading: false }))
            .catch(err => console.log(err));
    }

    onSearchSubmit = (searchTerm) => {
        this.setState({ isLoading: true });
        fetch(`https://restcountries.eu/rest/v2/name/${searchTerm}`)
            .then(result => result.json())
            .then(data => this.setState({ countries: data, isLoading: false }))
            .catch(err => console.log(err));
    }
    
    onFilterSubmit = (region) => {
        this.setState({ isLoading: true });
        fetch(`https://restcountries.eu/rest/v2/region/${region}`)
            .then(result => result.json())
            .then(data => this.setState({ countries: data, isLoading: false }))
            .catch(err => console.log(err));
    }

    render(){
        return (
            <div className="country-list container pt-5">
                <div className="row">
                    <div className="col-lg-5 col-md-5">
                        <SearchComponent onSubmit={this.onSearchSubmit} />
                    </div>
                    <div className="col-lg-2 offset-lg-5 col-md-4 offset-md-3">
                        <FilterComponent onSubmit={this.onFilterSubmit} />
                    </div>
                </div>                  
                <div className="row">
                    <CountryListHelper 
                        isLoading={this.state.isLoading} 
                        countries={this.state.countries} 
                    />
                </div>
            </div>
        );
    }
}

export default CountryList;