import { useState } from "react";
import "./phoneInput.css";
import OtpInput from "../OTP Input/OtpInput";

const PhoneInput = () => {

    const [phone, setPhone] = useState('');
    const [showOTP, setShowOTP] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const regex = /[^0-9]/g;

        if (phone.length != 10 || regex.test(phone)) {
            alert("Invalid Phone Number");
            return;
        }

        //Call Api

        setShowOTP(true);
    }


    const otpSubmit = (e) => {
        console.log("logged In Successfully")
    }

    return (
        <div className="phone-form">
            <h2>OTP Generator</h2>
            {
                !showOTP ? (
                    <form onSubmit={handleSubmit} className="phone-form">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Enter Phone Number..."
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="phone-inp"
                        />

                        <button>Send OTP</button>
                    </form>) : (
                    <div>
                        <p>Enter OTP Sent To Your Phone Number</p>
                        <OtpInput length={4} onSubmit={otpSubmit} />
                    </div>
                )
            }
        </div>
    )
}

export default PhoneInput;