import { useState } from "react";
import "./checkoutStepper/checkoutStepper.css";


const CheckoutStepper = ({ stepsConfig = [] }) => {

    const [currentStep, setCurrentStep] = useState(1);
    const [isCompleted, setIsCompleted] = useState(false);


    const handleNext = () => {
        setCurrentStep((prev) => {
            if (prev === stepsConfig.length) {
                setIsCompleted(true);
                return prev
            } else {
                return prev + 1
            }
        })
    }

    const ActiveComponent = stepsConfig[currentStep - 1]?.component

    if (!stepsConfig.length) {
        return <></>
    }

    return (
        <>
            <div className="stepper">
                {
                    stepsConfig.map((step, index) => {
                        return (
                            <div className={`step 
                                 ${currentStep > index + 1 || isCompleted ? "complete" : ""} 
                                 ${currentStep === index + 1 ? "active" : ""}`
                            }
                                key={step.name}
                            >
                                <div
                                    className={`step-number`}>
                                    {
                                        currentStep > index + 1 || isCompleted ? (
                                            <span>&#10003;</span>
                                        ) : (
                                            index + 1
                                        )
                                    }
                                </div>
                                <div className="step-name">{step.name}</div>
                            </div>
                        )
                    })
                }
            </div>

            <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"10px"}}>
                <ActiveComponent />

                <button
                    disabled={isCompleted}
                    className={`btn ${isCompleted ? "finish" : ""}`}
                    onClick={handleNext}
                >
                    {currentStep === stepsConfig.length ? "Finish" : "Next"}
                </button>
            </div>


        </>
    )
}

export default CheckoutStepper