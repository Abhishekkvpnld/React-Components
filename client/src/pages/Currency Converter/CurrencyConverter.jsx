import { useEffect, useState } from 'react';
import './currencyConverter.css';
import { GoArrowSwitch } from "react-icons/go";
import DropDown from '../../components/CurrencyDropDown/DropDown';

const CurrencyConverter = () => {
    const [currency, setCurrency] = useState([]);
    const [amount, setAmount] = useState(1);

    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');

    const [convertedAmount, setConvertedAmount] = useState('');
    const [loading, setLoading] = useState(false);

    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = JSON.parse(localStorage.getItem("favorites"));
        return Array.isArray(savedFavorites) ? savedFavorites : ["INR", "USD"];
    });

    const fetchCurrency = async () => {
        try {
            const res = await fetch('https://api.frankfurter.app/currencies');
            const data = await res.json();
            setCurrency(Object.keys(data));
        } catch (error) {
            console.log(error);
        }
    };

    const handleFavorites = (curr) => {
        let updatedFavorites;
        if (favorites.includes(curr)) {
            updatedFavorites = favorites.filter((fav) => fav !== curr);
        } else {
            updatedFavorites = [...favorites, curr];
        }
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    const handleCurrency = async () => {
        if (!amount) return;
        if (toCurrency === fromCurrency) {
            setConvertedAmount(amount);
            return; // Avoid unnecessary API call
        }

        setLoading(true);
        try {
            const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
            const data = await res.json();
            setConvertedAmount(data.rates[toCurrency]);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const swapCurrency = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    useEffect(() => {
        fetchCurrency();
    }, []);

    return (
        <div className='currency-converter-div'>
            <div className='currency-converter-section'>
                <div style={{ width: "90%" }}>
                    <h2>Currency Converter</h2>
                </div>

                <div className='currency'>
                    <div className='converter'>
                        From:
                        <DropDown
                            favorite={favorites}
                            handleFavorites={handleFavorites}
                            currency={fromCurrency}
                            currencies={currency}
                            setCurrency={setFromCurrency}
                        />
                    </div>

                    <div onClick={swapCurrency} className='currency-swap'>
                        <GoArrowSwitch className='currency-swap-icon' fontWeight={800} />
                    </div>

                    <div className='converter'>
                        To:
                        <DropDown
                            favorite={favorites}
                            handleFavorites={handleFavorites}
                            currency={toCurrency}
                            currencies={currency}
                            setCurrency={setToCurrency}
                        />
                    </div>
                </div>

                <input
                    type="number"
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                    className='currency-amount'
                />

                {loading && <span>Loading...</span>}

                <div className='btn-div'>
                    <button
                        className='convert-btn'
                        onClick={handleCurrency}
                        disabled={!fromCurrency || !toCurrency || !amount}
                    >
                        Convert
                    </button>
                </div>

                <div className='convert-result'>
                    Converted Amount: {convertedAmount && <span>{convertedAmount} {toCurrency}</span>}
                </div>
            </div>
        </div>
    );
};

export default CurrencyConverter;
