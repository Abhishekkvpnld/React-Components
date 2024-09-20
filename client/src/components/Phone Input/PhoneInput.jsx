import { useState } from "react";
import "./phoneInput.css";

const PhoneInput = () => {

    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();


    }

    return (
        <div className="phone-form">

            <form onSubmit={ }>
                <label htmlFor="phone">Phone Number</label>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter Phone Number..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </form>

        </div>
    )
}

export default PhoneInput;