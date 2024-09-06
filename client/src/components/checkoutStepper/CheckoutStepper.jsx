import { useEffect, useRef, useState } from "react";
import "./checkoutStepper.css";

const CheckoutStepper = ({ stepsConfig = [] }) => {

    const [currentStep, setCurrentStep] = useState(1);
    const [isCompleted, setIsCompleted] = useState(false);

    const stepRef = useRef([]);
    const [margin, setMargins] = useState({
        marginLeft: 0,
        marginRight: 0
    });

    useEffect(() => {
        // console.log(stepRef.current[0].offsetWidth)
        setMargins({
            marginLeft: stepRef.current[0].offsetWidth / 2,
            marginRight: stepRef.current[stepsConfig.length - 1].offsetWidth / 2
        })
    }, [stepRef]);

    const handleNext = () => {
        setCurrentStep((prev) => {
            if (prev === stepsConfig.length) {
                setIsCompleted(true);
                return prev;
            } else {
                return prev + 1;
            }
        });
    };

    const calculateProgressBar = () => {
        return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
    };

    const ActiveComponent = stepsConfig[currentStep - 1]?.component;

    if (!stepsConfig.length) {
        return <></>;
    }

    return (
        <>
            <div className="stepper">
                {stepsConfig.map((step, index) => (
                    <div
                        className={`step 
                                 ${currentStep > index + 1 || isCompleted ? "complete" : ""} 
                                 ${currentStep === index + 1 ? "active" : ""}`}
                        key={step.name}
                        ref={(el) => stepRef.current[index] = el}
                    >
                        <div className="step-number">
                            {currentStep > index + 1 || isCompleted ? (
                                <span>&#10003;</span>
                            ) : (
                                index + 1
                            )}
                        </div>
                        <div className="step-name">{step.name}</div>
                    </div>
                ))}

                <div className="progress-bar"
                    style={{
                        width: `calc(100% - ${margin.marginLeft + margin.marginRight}px)`,
                        marginLeft: margin.marginLeft,
                        marginRight: margin.marginRight
                    }}
                >
                    <div className="progress" style={{ width: `${calculateProgressBar()}%` }}></div>
                </div>
            </div>


            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "10px",
                }}
            >
                <ActiveComponent />

                {!isCompleted && (
                    <button
                        className={`btn`}
                        onClick={handleNext}
                    >
                        {currentStep === stepsConfig.length ? "Finish" : "Next"}
                    </button>
                )}
            </div>
        </>
    );
};

export default CheckoutStepper;
