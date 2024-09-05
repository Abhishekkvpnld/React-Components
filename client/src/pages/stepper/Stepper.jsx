import CheckoutStepper from "../../components/CheckoutStepper"
import "./stepper.css"

const stepper = () => {


  const checkout_steps = [
    {
      name:"Customer Info",
      component : ()=><div>Provide Your Contact Details</div>
    },
    {
      name:"Shipping Info",
      component : ()=><div>Enter Your Shipping Address</div>
    },
    {
      name:"Payment",
      component : ()=><div>Complete Your Payment</div>
    },
    {
      name:"Delivered",
      component : ()=><div>Your Order Has Been Delivered</div>
    }
  ]

  return (
    <div className="stepper-div">
      <h2>Checkout</h2>
      <CheckoutStepper stepsConfig={checkout_steps}/>
    </div>
  )
}

export default stepper