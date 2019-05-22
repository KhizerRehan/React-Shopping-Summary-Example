
import React, {Component} from 'react';
import {Button, Collapse, Row, Col, Media} from 'react-bootstrap';

const styles = {
    mediaImage: {
        width: '200px',
        height: '200px'
    }
};

export default class ItemDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    toggleCollapse = () => {
        this.setState({
            open: !this.state.open
        }, () => {
            console.log('STATE', this.state);
        });
    };

    render() {
        return (
            <React.Fragment>
                <Button className="item-details-button"
                        bsstyle="link"
                        onClick={this.toggleCollapse}>
                    {this.state.open ? `- Hide` : `+ Show`} Details
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                            <Media>
                                <img
                                    width={64}
                                    height={64}
                                    className="mr-3"
                                    src="https://sc02.alicdn.com/kf/HTB1Io4LaOfrK1RjSspbq6A4pFXaW/modern-lounge-chair-cheap-wholesale-of-modern.jpg"
                                    alt="Generic placeholder"
                                />
                                <Media.Body>
                                    <h5>Media Heading</h5>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo.

                                        <Row>
                                            <Col md={6}>
                                            <strong>{this.props.price ? `$${this.props.price}` : `$0`}</strong>
                                            <br />
                                            <strong className="price-strike"> {this.props.price ? `$${this.props.price}` : `$0`}</strong>
                                           
                                            </Col>
                                            <Col md={6}>
                                            <strong>Qty</strong>: {this.props.qty ? `${this.props.qty}` : `0`}
                                            </Col>
                                        </Row>
                                    </p>
                                </Media.Body>
                            </Media>
                    </div>
                </Collapse>
            </React.Fragment>
        )
    }
}