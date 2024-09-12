import { useState } from 'react';
import './currencyConverter.css';
import { GoArrowSwitch } from "react-icons/go";


const CurrencyConverter = () => {

    const [currency, setCurrency] = useState([]);
    const [amount, setAmount] = useState(1);

    //currency:https://api.frankfurter.app/currencies
    //convert: https://api.frankfurter.app/latest?amount=1&from=USD&to=INR

    return (
        <div className='currency-converter-div'>

            <div className='currency-converter-section'>
                <div style={{width:"90%"}}>
                <h2>Currency Converter</h2>
                </div>

                <div className='currency'>
                    <div className='converter'>
                        from:
                        <input type="text" />
                    </div>

                    <div className='currency-swap'><GoArrowSwitch fontWeight={800}/></div>

                    <div className='converter'>
                        to:
                        <input type="text" />
                    </div>
                </div>

                <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount} className='currency-amount' />
                <div className='btn-div'>
                    <button className='convert-btn'>Convert</button>
                </div>

                <div className='convert-result'>
                    <span>Converted Amount : 466336 USD</span>
                </div>
            </div>
        </div>
    )
}

export default CurrencyConverter