import React, { Component } from 'react';
import { 
    Button,
    Collapse,
    Jumbotron,
    Form,
    Row,
    Col,
    FormGroup,
    FormControl
} from 'react-bootstrap';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions';

class PromoCodeDiscount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            value:''
        }
    }

    togglePromoCode = () =>{
        this.setState({
            open:!this.state.open
        });
    }

    handleChange = (evt)=>{
        // FIRING EVENT OF REDUX ACTION CREEATOR: mapDispatchToProps 
        this.props.handleChange(evt);
    }
    
    render() {
        return (
           <React.Fragment>
                 <Button className="item-details-button btn-danger"
                 onClick={this.togglePromoCode}>
                 {this.state.open ? '-Hide Promo Code' : '+Show Promo Code'}
                 </Button>

                 <Collapse in={this.state.open}>
                  <Row className="show-grid">
                    <Col md={12}>
                    <Form>
                        <FormGroup>
                            <label>Promo Code</label>
                            <FormControl
                            type="text"
                            placeholder="Enter Promo code"
                            value={this.props.promoCode}
                            onChange={this.handleChange}
                            ></FormControl>
                        </FormGroup>

                        <Button
                        block
                        bsstyle="success"
                        className="btn btn-success btn-round"
                        disabled={this.props.isDisabled}
                        onClick={this.props.giveDiscountUsingPromoCode}
                        >Apply Promo Code</Button>
                    </Form>
                    </Col>
                  </Row>
                 </Collapse>
           </React.Fragment>
        )
    }
}

const mapStateToProps =  state =>({
    promoCode: state.promoCode.value
})

// Make sure the actions are available as props
// so you don't have to do store.dispatch
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PromoCodeDiscount)