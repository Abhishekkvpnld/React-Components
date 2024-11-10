import { useEffect, useRef, useState } from "react";
import "./otpInput.css";

const OtpInput = ({ length, onSubmit }) => {

    const [otp, setOtp] = useState(new Array(length).fill(''));

    const inputRefs = useRef([]);

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleOnChange = (e, index) => {


        const value = e.target.value;
        if (isNaN(value)) return;

        const newOTP = [...otp];

        newOTP[index] = value.substring(value.length - 1);
        setOtp(newOTP);

        //Join Otp
        const combainedOTP = newOTP.join("");
        if (combainedOTP.length === length) {
            onSubmit();
        }

        //Move to next input
        if (value && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }


        if (!otp[index] && index > 0 && otp[index + 1]) {
            inputRefs.current[index + 2].focus();
        }
    }

    const handleOnClick = (index) => {
        inputRefs.current[index].setSelectionRange(1, 1);

        if (index > 0 && !otp[index - 1]) {
            inputRefs.current[otp.indexOf('')].focus();
        }

    }

    const handleKeyDown = (e, index) => {
        //Moving focus to previous field
        if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus();
        }

    }

    return (
        <div className="otp-input-div">
            {
                otp?.map((i, index) => (
                    <input
                        key={index}
                        ref={(input) => inputRefs.current[index] = input}
                        value={i}
                        type="text"
                        className="otp-box"
                        onChange={(e) => handleOnChange(e, index)}
                        onClick={() => handleOnClick(index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                    />
                ))
            }
        </div>
    )
}

export default OtpInput;