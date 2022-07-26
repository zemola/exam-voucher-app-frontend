import PaystackPop from '@paystack/inline-js'
import { useState } from 'react';


const PaystackPayment = ({price}) => {
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
      },
      onCancel() {
        console.log("transaction cancled")
      },
      

      
    })

  }

  return ( <div
  ><h1>PayStack</h1>
      <div>
        <form onSubmit={payWithPaystack}>
          <div>
            <label>Email Address</label>
            <input type="email" id='email-address' onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div>
            <label>Amount</label>
            <input type="tel" id='amount' value={`N ${price}`} disabled />
          </div>
          <div>
            <label>First Name</label>
            <input type="text" id='first-name' onChange={(e)=>setFirstName(e.target.value)} />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" id='last-name' onChange={(e)=>setLastName(e.target.value)} />
          </div>
          <div><button>Pay</button></div>
        </form>
      </div>
  </div> );
}
 
export default PaystackPayment;