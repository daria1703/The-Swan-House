import StripeCheckout from "react-stripe-checkout";
import {useEffect, useState} from "react"
import axios from "axios"

const stripe_Key = "pk_test_51MKs1lAJd6bDnz1SAKmGCxVUHFKWurMKBfJXPAH27hqBgDobYYSYlvVrwVRG8UacRfCCbFMgw4djixfgiBDM8CMs00FDruwefy"

const Payment = () =>{

    const [stripeToken, setStripeToken] = useState(null)

    const onToken = (token) =>{
       setStripeToken(token)
    };

    useEffect(()=>{
        const makeRequest = async () =>{
            try{
                const res = await axios.post(
                    "http://localhost:3000/payment/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    }
                );
                console.log(res.data);
            }catch (err){
                console.log(err)
            }
        };
     //   stripeToken && makeRequest
    },[stripeToken]);

    return(
        <StripeCheckout name="The Swan House" billingAddress shippingAddress description = "Your total is $20" amount={2000} token={onToken} stripeKey={stripe_Key}>
            <button>Pay by Stripe</button>
        </StripeCheckout>
    )
}


export default Payment