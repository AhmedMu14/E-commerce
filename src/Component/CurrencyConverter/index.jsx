import React, { useState, useEffect } from "react";
import * as select from "@radix-ui/react-select";
import axios from "axios";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const CurrencyConverter = ({ className, triggerComponent }) => {
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [baseCurrency] = useState("USD");
  const [conversionRate, setConversionRate] = useState(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get("https://api.exchangerate-api.com/v4/latest/USD");
        setCurrencies(Object.keys(response.data.rates));
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };
    fetchCurrencies();
  }, []);

  const handleCurrencyChange = async (currency) => {
    setSelectedCurrency(currency);

    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
      const rate = response.data.rates[currency];
      setConversionRate(rate);
      setTimeout(() => {
        setSelectedCurrency("");
        setConversionRate("");
      }, 7000);

    } catch (error) {
      console.error("Error fetching conversion rate:", error);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <select.Select value={selectedCurrency} onValueChange={handleCurrencyChange}>
        <select.SelectTrigger
          className="flex items-center p-2 border border-gray-300 rounded-lg bg-white cursor-pointer"
        >
          {triggerComponent ? (
            triggerComponent
          ) : (
            <>
              <select.SelectValue placeholder="Select Currency" />
              <ChevronDownIcon className="ml-2 w-4 h-4 text-gray-600" />
            </>
          )}
        </select.SelectTrigger>

        <select.SelectContent
          className="bg-white border shadow-lg rounded-lg mt-1 p-2 z-50 max-h-56 overflow-y-auto"
        >
          {currencies.length ? (
            (() => {
              const limit = 9;
              const limitedCurrencies = currencies.slice(0, limit);

              if (!limitedCurrencies.includes("PKR")) {
                limitedCurrencies.push("PKR");
              }

              return limitedCurrencies.map((currency) => (
                <select.SelectItem
                  key={currency}
                  value={currency}
                  className="p-2 cursor-pointer hover:bg-gray-100 rounded-lg"
                >
                  {currency}
                </select.SelectItem>
              ));
            })()
          ) : (
            <div className="p-2 text-gray-500">Loading...</div>
          )}
        </select.SelectContent>
      </select.Select>

      {/* Display Conversion Rate Only When a Currency is Selected */}
      {selectedCurrency && conversionRate !== null && (
        <div className="mt-2 text-gray-700">
          1 {baseCurrency} = {conversionRate} {selectedCurrency}
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;