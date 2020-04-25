import React from 'react';

import Custombutton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown =()=>(
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <Custombutton>GO TO CHECKOUT</Custombutton>
    </div>
)

export default CartDropdown;