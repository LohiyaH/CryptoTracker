# CryptoApp

## Description
CryptoApp is a React Native application that fetches and displays cryptocurrency prices using the CoinLore API. The app provides a simple and intuitive interface for users to view real-time data on various cryptocurrencies.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/LohiyaH/CryptoTracker
   cd crypto-app
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage
1. Start the Expo development server:
   ```bash
   npm start
   ```
2. Scan the QR code with the Expo Go app on your mobile device to view the application.

## API
The app fetches cryptocurrency data from the CoinLore API. The main function responsible for fetching the data is `getCoins`. It retrieves the list of cryptocurrencies and their prices from the following endpoint:
- `https://api.coinlore.net/api/tickers/`

## License
This project is licensed under the MIT License.
