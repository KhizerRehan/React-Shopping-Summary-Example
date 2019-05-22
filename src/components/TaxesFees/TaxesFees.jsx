import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class TaxesFees extends Component {
    render() {
        return (
            <Row>
                <Col md={6}> Estimated taxes & fees (Based on 12345 la)</Col>
                <Col md={6}>{`$${this.props.taxes}`}</Col>
            </Row>
        )
    }
}
