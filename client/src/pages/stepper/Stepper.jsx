// import CheckoutStepper from "../../components/CheckoutStepper/CheckoutStepper"
import "./stepper.css"

const stepper = () => {


  const checkout_steps = [
    {
      name:"Customer Info",
      component : ()=><div style={{fontSize:"25px",fontWeight:"600",color:"grey"}}>Provide Your Contact Details</div>
    },
    {
      name:"Shipping Info",
      component : ()=><div style={{fontSize:"25px",fontWeight:"600",color:"grey"}}>Enter Your Shipping Address</div>
    },
    {
      name:"Payment",
      component : ()=><div style={{fontSize:"25px",fontWeight:"600",color:"grey"}}>Complete Your Payment</div>
    },
    {
      name:"Delivered",
      component : ()=><div style={{fontSize:"25px",fontWeight:"600",color:"grey"}}>Your Order Has Been Delivered</div>
    }
  ]

  return (
    <div className="stepper-div">
      <h2>Checkout</h2>
      {/* <CheckoutStepper stepsConfig={checkout_steps}/> */}
    </div>
  )
}

export default stepper