import React, { Component } from 'react';
import {Button, Collapse, Well, Row, Col, Media} from 'react-bootstrap';

export default class ItemDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    toggleCollapse = () =>{
        this.setState({
            open: !this.state.open
        },()=>{
            console.log('STATE',this.state);
        });
    }
    render() {
        return (
            <React.Fragment>
                <Button className="item-details-button"
                bsstyle="link"
                onClick={this.toggleCollapse}>
                {this.state.open ? `- Hide` : `+ Show` } Details
                </Button>
            </React.Fragment>
        )
    }
}
