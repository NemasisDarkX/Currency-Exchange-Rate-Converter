function fetchExchangeRates(baseCurrency, targetCurrencies) {
    const apiUrl = `https://v6.exchangerate-api.com/v6/51b1479b8163e0fd12b2f42b/latest/${baseCurrency}`;
    return fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const rates = data.conversion_rates;
            const convertedAmounts = {};
            for (const currency of targetCurrencies) {
                if (currency in rates) {
                    convertedAmounts[currency] = rates[currency];
                }
            }
            return convertedAmounts;
        })
        .catch(error => {
            console.error('Failed to Fetch Exchange Rates:', error);
            return null;
        });
}

function convertCurrency() {
    const baseCurrency = document.getElementById('baseCurrency').value;
    const targetCurrencies = document.getElementById('targetCurrencies').value.split(',');
    const amount = parseFloat(document.getElementById('amount').value);

    fetchExchangeRates(baseCurrency, targetCurrencies)
        .then(rates => {
            if (rates !== null) {
                const resultElement = document.getElementById('result');
                resultElement.innerHTML = '';
                for (const currency in rates) {
                    const convertedAmount = amount * rates[currency];
                    resultElement.innerHTML += `${amount} ${baseCurrency} = ${convertedAmount.toFixed(2)} ${currency}<br>`;
                }
            }
        });
}
