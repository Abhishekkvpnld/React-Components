import { useState } from "react";
import "./otpInput.css";

const OtpInput = ({ length, onSubmit }) => {

    const [otp, setOtp] = useState(new Array(length).fill(''));

    const handleOnChange = (e, index) => {

    }

    const handleOnClick = (index) => {

    }

    const handleKeyDown = () => {

    }

    return (
        <div className="otp-input-div">
            {
                otp?.map((i, index) => (
                    <input
                        key={index}
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