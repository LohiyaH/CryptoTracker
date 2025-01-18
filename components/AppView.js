import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getCoins } from "../Model.js";
import { render } from "react-dom";

export default function AppView() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      const coinData = await getCoins();
      setCoins(coinData || []); // Ensure that we set an empty array if coinData is undefined
    };

    fetchCoins();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Cryptocurrencies</Text>
      </View>

      {/* CoinTable */}
      <View style={styles.table}>
        {/* HeaderRow */}
        <View style={styles.tableHeader}>
          <Text style={[styles.tableHeaderText, styles.tableHeaderTextName]}>Name</Text>
          <Text style={[styles.tableHeaderText, styles.tableHeaderTextSymbol]}>Symbol</Text>
          <Text style={[styles.tableHeaderText, styles.tableHeaderTextPrice]}>Price (US$)</Text>
        </View>
        {/* CoinList */}
        <FlatList
          style={styles.coinList}
          data={coins}
          renderItem={({ item }) =>
            <View style={styles.coinCell}>
              <Image style={styles.coinLogo} source={{ uri: `https://www.coinlore.com/img/${item.nameid}.png` }} />
              <View style={styles.coinName}>
                <Text style={[styles.coinText, styles.coinNameText]}>
                  {item.name}
                </Text>
              </View>
              <View style={styles.coinSymbol}>
                <Text style={[styles.coinText, styles.coinSymbolText]}>
                  {item.symbol}
                </Text>
              </View>
              <View style={styles.coinPrice}>
                <Text style={[styles.coinText, styles.coinPriceText]}>
                  {item.price_usd}
                </Text>
              </View>
            </View>}
          keyExtractor={item => item.rank}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#FAF9F6",
    padding: 40
  },
  header: {
    flex: 1,
    alignItems: "center",
    marginTop: 20
  },
  headerText: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 24,
    padding: 40
  },
  table: {
    flex: 5
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 1,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  tableHeaderText: {
    fontSize: 10
  },
  tableHeaderTextName: {},
  tableHeaderTextSymbol: {
    marginLeft: 20
  },
  tableHeaderTextPrice: {},
  coinList: {},
  coinCell: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  coinName: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flex: 1,
    flexWrap: "wrap",
    marginRight: 22
  },
  coinLogo: {
    width: 24,
    height: 24,
    marginRight: 8,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  coinText: {
    fontSize: 14
  },
  coinNameText: {
    fontWeight: "bold"
  },
  coinSymbol: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flex: 1,
    marginLeft: 4
  },
  coinSymbolText: {},
  coinPrice: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
    marginLeft: 8
  },
  coinPriceText: {
    fontWeight: "bold"
  }
});
