# Currency-Exchange-Rate-Converter 📈
<br/>
<p>This is a exchange rate converter program build using python and app.exchangerate-api.com</p>

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)

<p>To run the program, first clone the project or download the zip file and open it in your code editor</p>

```bash
> git clone https://github.com/NemasisDarkX/Currency-Exchange-Rate-Converter.git
```
<p>Then install the required liberary</p>
```bash
> pip install requests
```
</br>
<p>Then get your api(click on the image)</p>
<a href="https://www.exchangerate-api.com/"><img src="https://imagetolink.com/ib/H8oUb7nMd8.png" alt="H8oUb7nMd8"/></a>
<br/>

<p>Edit these parts(your_api_key) to enter your api key</p>

```bash
base_url = 'https://v6.exchangerate-api.com/v6/your_api_key/latest' #add your apikey which you got from https://www.exchangerate-api.com/ instead of your_api_key
api_key = 'your_api_key' #add your apikey which you got from https://www.exchangerate-api.com/ instead of your_api_key
```

<p>and on running it, you get</P>

```bash
Enter Currency You Want To Convert:  
Enter Currency you want to Convert to:
Enter Amount To Convert:
```
<p>Be sure to use the international currency code (like USD) in capital leters. Do not use the currency name!</p>

<p>you can input multiple currency codes in the option you want to convert to. For example: </p>

```bash
Enter Currency you want to Convert to:INR,USD
```
<p>and you get output as:</p>

```bash
10.0 CAD = 619.703 INR
10.0 CAD = 7.574999999999999 USD
```
<b><p>EXAMPLES</p></b>
  
  ```bash
Enter Currency You Want To Convert:CAD
Enter Currency you want CAD convert to:INR,USD
Enter Amount To Convert:10
10.0 CAD = 619.703 INR
10.0 CAD = 7.574999999999999 USD
  ```
<b><p>IF YOU LIKE THIS PROJECT CONSIDER GIVING IT A ⭐</p></b>  
  
