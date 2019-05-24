
import React, {Component} from 'react';
import Subtotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import {Container, Row, Col} from 'react-bootstrap';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetail from './components/ItemDetail/ItemDetail.jsx';
import PromoCodeDiscount from './components/PromoCodeDiscount/PromoCodeDiscount';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './redux/actions';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 100,
            pickupSavings: -3.85,
            taxes: 0,
            price: 10,
            qty:1,
            disablePromoButton:false
        }
    }

    componentDidMount() {
        this.setState({
            taxes:(this.state.total+this.state.pickupSavings)*0.0875
        },
        () => {
           this.setState({
            price:this.state.total+this.state.pickupSavings+this.state.taxes
           },()=>{
           console.log(this.state);
           })
        }
        );
    }

    giveDiscountUsingPromoCode = () =>{
        console.log('Event Fired');
    }
    
    render() {
        return (
            <Container className="container">
                <Row>
                    <Col className="purchase-card" md={{span: 6, offset: 4}}>
                        <Subtotal price={this.state.total.toFixed(2)}/>
                        <PickupSavings price={this.state.pickupSavings.toFixed(2)}/>
                        <TaxesFees taxes={this.state.taxes.toFixed(2)}/>
                        <EstimatedTotal price={this.state.price.toFixed(2)}/>
                        <ItemDetail {...this.state}/>
                        <PromoCodeDiscount isDisabled={this.state.disablePromoButton} giveDiscountUsingPromoCode={this.giveDiscountUsingPromoCode}/>
                    </Col>
                </Row>
            </Container>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
