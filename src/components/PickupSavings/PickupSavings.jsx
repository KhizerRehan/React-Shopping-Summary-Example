
import React, {Component} from 'react';
import {Row, Col, Tooltip, OverlayTrigger} from 'react-bootstrap';

const styles = {
    pickupSavings: {
        color: 'red'
    },
    totalSavings: {
        color: 'grey'
    },
    tooltip: {
        color: 'yellow'
    }
};
export default class PickupSavings extends Component {
    render() {
        const tooltip = (
            <Tooltip id="tooltip">
                <p style={styles.tooltip}>Picking up your order passing it to you. <strong>Thanks</strong></p>
            </Tooltip>
        );
        return (
            <Row>
                <Col md={6}>
                    <OverlayTrigger placement="top" overlay={tooltip}>
                        <div style={styles.pickupSavings}> Pickup Savings</div>
                    </OverlayTrigger>
                </Col>
                <Col md={6} style={styles.totalSavings}>
                    {`$${this.props.price}`}
                </Col>
            </Row>
        );
    }
}

