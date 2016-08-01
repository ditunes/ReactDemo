/**
 * Created by linhan on 16/7/31.
 */

import React, {Component} from 'react';

export default class CategoryRow extends Component{

    render(){

        return <tr colSpan="8" style={{"backgroundColor":"red"}}>{this.props.category}</tr>
    }

}