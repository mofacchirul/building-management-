import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import SecureAxioc from '../../Hook/SecureAxios';
import { AuthContext } from '../../Provider/Provider';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheakoutFrom = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret,setclientesecure]=useState('')
    const [errorMessage, setErrorMessage] = useState(null);
    const [triantioin,settriantioin]= useState('')
    const {user,loding}=useContext(AuthContext)
const axiossecure= SecureAxioc();
const Navigate = useNavigate()

const { data: member = [],refetch } = useQuery({
    queryKey: ['member', user?.email],
    enabled: !loding,
    queryFn: async () => {
      const res = await axiossecure.get(`/agrement?email=${user?.email}`);
      return res?.data;
    }
  });
  const  totalrent = member.reduce((total,item)=> total + item.rent ,0)
  





    useEffect(()=>{
       if(totalrent >0){
        axiossecure.post('/create-checkout-session',{rent : totalrent})
        .then(res=>{       
            setclientesecure(res.data.clientSecret)
        })
       }
    },[axiossecure,totalrent])


    const handleSubmit = async (event) => {
       
        event.preventDefault();
    
        if (!stripe || !elements) {
      
          return;
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            setErrorMessage(error.message);

          } else {
            setErrorMessage(null);
          }
    
          const {paymentIntent,confromerror} = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:card,
                billing_details: {
                      email:user?.email || 'anonymus',
                    name:user?.displayName || 'anonumus'
                }
            }
          })
          if(confromerror){

          }
          else{
            if(paymentIntent.status === 'succeeded'){
                settriantioin(paymentIntent.id)
                const payment={
                    email:user.email,
                    transactionId: paymentIntent.id,
                    rent: totalrent,
                    date:new Date(),
                    paymentid: member.map(item=> item._id),
                    paymentids: member.map(item=> item.agreementid),

                    status: 'pending'

                }
            const res= await  axiossecure.post('/payments',payment)
            refetch()
            if(res.data.result.insertedId){
                Swal.fire({
                    title: "thank you for the money !",
                    icon: "success",
                    draggable: true
                  });
                  Navigate('/dashbord/paymenthistory')
            }

            }
          }
    }
    return (
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn  bg-green-500 text-white' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            {triantioin && <p className="text-green-600 ">you Transion id; {triantioin}</p>}
    </form>
    );
};

export default CheakoutFrom;