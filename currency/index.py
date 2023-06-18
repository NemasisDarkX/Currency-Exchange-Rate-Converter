import requests

base_url = 'https://v6.exchangerate-api.com/v6/your_api_key/latest'
api_key = 'your_api_key'


def fetch_data(base_currency, target_currency):
    endpoint = f'{base_url}/{base_currency}'
    params = {
        'base': base_currency,
        'symbols': ','.join(target_currency)
    }

    headers = {
        'Authorization': f'Bearer {api_key}'
    }

    response = requests.get(endpoint, params=params, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        print("Failed to Fetch Exchange Rates!")
        return None


def convert_currency(amount, rates):
    return amount*rates


def main():
    base_currency = input("Enter Currency You Want To Conver:")
    target_currencies = input("Enter Currency you want {base_currenct} convert to:")
    target_currencies = target_currencies.split(',')

    rates = fetch_data(base_currency, target_currencies)

    if rates is not None:
        amount = float(input("Enter Amount To Convert:"))

        for currency in target_currencies:
            rate = rates['conversion_rates'][currency]
            converted_amount = convert_currency(amount, rate)
            print(f'{amount} {base_currency} = {converted_amount} {currency}')




if __name__ == '__main__':
    main()
