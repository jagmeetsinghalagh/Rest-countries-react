import React from 'react';

import Country from  './Country';

const CountryListHelper = props => {
    if(props.isLoading){
        return (
            <div className="spinner-container">
                <div className="spinner-border text-dark text-center" role="status">
                    <span className="sr-only">Loading...</span>
                </div>;
            </div>
        );
    } else {
        if(Object.keys(props.countries).length > 0){
            return props.countries.map(country => {
                return <Country name = {country.name} 
                    flag = {country.flag} 
                    population = {country.population} 
                    region = {country.region}
                    currencies = {country.currencies} 
                    key = {country.name}
                />; 
            });
        } else {
            return <h2>No Countries Found.</h2>
        }
    }
}

export default CountryListHelper;