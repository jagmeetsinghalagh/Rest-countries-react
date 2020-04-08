import React from 'react';

class FilterComponent extends React.Component {
    options = [
        'Filter by Region',
        'Africa',
        'Americas',
        'Asia',
        'Europe',
        'Oceania'
    ];

    onChangeHandler = (event) => {
        this.props.onSubmit(event.target.value);
    }

    render(){
        let optionsJsx = this.options.map(option => <option key={option} value={option}>{option}</option>);
        return (
            <div className="mt-sm-2">
                <form>
                    <select className="form-control" onChange={this.onChangeHandler}>
                        {optionsJsx}
                    </select>
                </form>
            </div>
        );
    }
    
}

export default FilterComponent;