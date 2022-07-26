import PaystackPop from '@paystack/inline-js'
import { useState } from 'react';
import './payment.css'

import { toast } from 'react-toastify';



const PaystackPayment = ({price}) => {

  const notify = () => toast ("Successful Add to Cart!");


  const [email, setEmail] = useState('');
  // const [amount, setAmount] = useState(price);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  console.log(price);

  const payWithPaystack = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop()
    paystack.newTransaction ({
      key: "pk_test_b6a111fc02ef39fd135c22afeb07e43270be0cdc",
      amount:price*100,
      email,
      firstName,
      lastName,
      onSuccess(transaction) {
        let message = `payment Complete Reference ${transaction.refrence}`
        console.log(message)
        notify(); 
      },
      onCancel() {
        console.log("transaction cancled")
      },
      

      
    })

  }

  return ( 
  <div className='payment'>
    <div className='sub-payment' > 
      <div>
        <h1 className='payment-text' >PayStack</h1>
          <div className='form-payment'>
            <form onSubmit={payWithPaystack}>
              <div>
                <label className='payment-form'>Email</label>
                <input type="email" id='email-address' onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div>
                <label className='payment-form'>Amount</label>
                <input type="tel" id='amount' value={`N ${price}`} disabled />
              </div>
              <div>
                <label className='payment-form'>First Name</label>
                <input type="text" id='first-name' onChange={(e)=>setFirstName(e.target.value)} />
              </div>
              <div>
                <label className='payment-form'>Last Name</label>
                <input type="text" id='last-name' onChange={(e)=>setLastName(e.target.value)} />
              </div>
              <div>
                <button className='btn'>Pay</button>
              </div>
            </form>
          </div>
      </div>
    </div>  
  </div> 
  );
}
 
export default PaystackPayment;