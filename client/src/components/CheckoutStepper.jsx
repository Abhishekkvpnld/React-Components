import "./checkoutStepper/checkoutStepper.css";


const CheckoutStepper = ({stepsConfig = []}) => {

    if (!stepsConfig.length) {
        return <></>
    }

    return (
        <div className="stepper">
            {
                stepsConfig.map((step, index) => {
                    return (
                        <div className="step" key={step.name}>
                            <div className="step-number">{index + 1}</div>
                            <div className="step-name">{step.name}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CheckoutStepper