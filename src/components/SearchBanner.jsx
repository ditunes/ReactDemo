import React, {Component} from 'react';


export default class SearchBanner extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.onUserSearch(this.refs["filterTextInput"].value, this.refs["inStockOnlyInput"].checked);
    }


    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.inputText}
                    ref="filterTextInput"
                    onChange={this.handleChange}
                    />

                <input
                    type="checkbox"
                    checked={this.props.isOnlyShowStocked}
                    ref="inStockOnlyInput"
                    onChange={this.handleChange}
                    />
                {' '}
                Only show products in stock

            </form>
        );


    }



}
