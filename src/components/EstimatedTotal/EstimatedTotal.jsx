import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

const styles = {
    totalPrice:{
        color:'pink'
    }
}

export default class EstimatedTotal extends Component {
    render() {
        return (
            <Row>
                <Col md={6}>
                    <h2>Est. Total</h2>
                </Col>
                <Col md={6} style={styles.totalPrice}>
                    <h2>{`$${this.props.price}`}</h2>
                </Col>
            </Row>
        )
    }
}