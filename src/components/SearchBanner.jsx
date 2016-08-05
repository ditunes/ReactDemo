import React, {Component} from 'react';
import { connect } from 'react-redux'

export default class SearchBanner extends Component {
    constructor() {
        super();
        this.handleInputSearchTextChange = this.handleInputSearchTextChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    handleInputSearchTextChange() {
        this.props.onSearchNameChange(this.refs["filterTextInput"].value);
    }

    handleStatusChange(){
        this.props.onIsInStockedChange(this.refs["inStockOnlyInput"].checked);
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.inputText}
                    ref="filterTextInput"
                    onChange={this.handleInputSearchTextChange}
                    />

                <input
                    type="checkbox"
                    checked={this.props.isOnlyShowStocked}
                    ref="inStockOnlyInput"
                    onChange={this.handleStatusChange}
                    />
                {' '}
                Only show products in stock
            </form>
        );


    }



}
