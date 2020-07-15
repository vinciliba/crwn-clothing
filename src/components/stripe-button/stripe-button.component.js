import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H5BsQJZWeCECfmJLrYRGQiCaQSqTAZpPhU5YjjPWIYWS2aHThbupI9ZQzW4ZyRNnBQH8XI7TspNNFAfop82xlLL00B2jGKftl'

    const onToken = (token) => {
    console.log(token)
    alert('Payment Successful');
         
        };


return (
<div>
<StripeCheckout
label='Pay Now'
name='CRWN Clothing Ltd.'
billingAddress
shippingAddress
image='https://svgshare.com/i/CUz.svg' 
description={`Yout total is $${price}`}
amount ={priceForStripe}
panelLabel='Pay Now'
token={onToken}
stripeKey={publishableKey}
/>
</div>

)}


export default StripeCheckoutButton;