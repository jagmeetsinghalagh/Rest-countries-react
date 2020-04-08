import React from 'react';
import { Link } from 'react-router-dom';

const Country = props => {
    let currencies = props.currencies.map(
        c => <span key={c.name}>{c.name} {c.symbol} </span>
    );
    return (
        <div className="col-lg-3 mb-2 p-2 country">
            <div className="card">
                <img style={{width:'100%'}} src={props.flag} className="card-img-top" alt="No img" />
                <div className="card-body">
                    <h4 className="card-title">{props.name}</h4>
                    <span><b>Population:</b> {props.population}</span><br />
                    <span><b>Region:</b> {props.region}</span><br />
                    <span>
                        <b>Currency:</b> {currencies}
                    </span><br/>
                    <Link to={`/country/${props.name}`} className="btn btn-primary mt-1">View Details</Link>
                </div>
            </div>
        </div>
    );
}

export default Country;