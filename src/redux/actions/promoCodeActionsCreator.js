import { PROMO_CODE } from "./promoCodeActions";

export const handleChange = (e) => (dispatch) =>{
    console.log('DISPATCHING EVENT OF TYPE:',PROMO_CODE);
    dispatch({
        type: PROMO_CODE,
        payload: e.target.value
    })
}