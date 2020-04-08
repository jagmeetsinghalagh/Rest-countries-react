import React from 'react';
import { Link } from 'react-router-dom';

import './countrydetails.css';

class CountryDetails extends React.Component {

    state = {
        country: {},

    };

    countryName = this.props.match.params.countryName;

    componentDidMount(){
        fetch(`https://restcountries.eu/rest/v2/name/${this.countryName}`)
            .then(result => result.json())
            .then(data => this.setState({ country: data[0] }))
            .catch(err => console.log(err));
    }


    render(){
        let { country } = this.state;
        if(Object.keys(country).length > 0){

            let languages = country.languages.map(
                lang => <span key={lang.name}>{lang.name} </span>
            );
            let currencies = country.currencies.map(
                c => <span key={c.name}>{c.name} </span>
            );
            let countryBorders = country.borders.map(b => {
                return <span className="border" key={b}>{b} </span>
            });

            return (
                <div className="container country-details pt-5">
                    <Link to="/" className="btn btn-light mt-5">
                        <i className="fas fa-arrow-left"></i> Back
                    </Link>
                    <div className="country row">
                        <div className="col-lg-5 col-md-5 col-sm-12 ">
                            <img style={{ width:"100%" }} src={country.flag} alt="No img available" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 ml-4 pl-4">
                            <h2><b>{country.name}</b></h2>
                            <div className="row country-stats">
                                <ul className="col-lg-6 col-md-6 col-sm-12">
                                    <li><b>Native Name:</b> {country.nativeName}</li>
                                    <li><b>Population:</b> {country.population}</li>
                                    <li><b>Region:</b> {country.region}</li>
                                    <li><b>Sub Region:</b> {country.subregion}</li>
                                </ul>
                                <ul className="col-lg-6 col-md-6 col-sm-12 pl-2">
                                    <li><b>Top Level Domain:</b> {country.topLevelDomain}</li>
                                    <li><b>Currencies:</b> {currencies}</li>
                                    <li><b>languages:</b> {languages}</li>
                                    <li><b>Capital:</b> {country.capital}</li>
                                </ul>
                            </div>
                            <div className="mt-5"><b>Border Countries: </b> {countryBorders}</div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <div>No Country Found</div>
        }
    }
}

export default CountryDetails;