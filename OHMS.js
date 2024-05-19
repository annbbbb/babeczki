import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const App = () => {
  const [passengers, setPassengers] = useState([
    { lp: '1', seat: '12A', pulse: '65 BPM', presure: '120/70 mm Hg', oxygen: '98%', temp: '36,2 °C' },
    { lp: '2', seat: '19D', pulse: '101 BPM', presure: '140/90 mm Hg', oxygen: '95%', temp: '36,7 °C' },
    { lp: '3', seat: '33C', pulse: '76 BPM', presure: '120/90 mm Hg', oxygen: '98%', temp: '35,7 °C' },
    { lp: '4', seat: '39A', pulse: '127 BPM', presure: '172/90 mm Hg', oxygen: '98%', temp: '37,2 °C' }
  ]);

  const renderHeader = () => (
    <View style={[styles.row, styles.headerRow]}>
      <Text style={[styles.cell, styles.headerCell]}>#</Text>
      <Text style={[styles.cell, styles.headerCell]}>Seat</Text>
      <Text style={[styles.cell, styles.headerCell]}>Pulse</Text>
      <Text style={[styles.cell, styles.headerCell]}>Pressure</Text>
      <Text style={[styles.cell, styles.headerCell]}>Temp</Text>
      <Text style={[styles.cell, styles.headerCell]}>Oxygen</Text>
    </View>
  );

  const renderItem = ({ item }) => {
    let rowStyle = styles.row;
    let textStyle = styles.cell;

    if (item.seat === '19D') {
      rowStyle = [styles.row, styles.yellowRow];
      textStyle = [styles.cell, styles.boldText];
    } else if (item.seat === '39A') {
      rowStyle = [styles.row, styles.redRow];
      textStyle = [styles.cell, styles.boldText];
    }

    return (
      <View style={rowStyle}>
        <Text style={textStyle}>{item.lp}</Text>
        <Text style={textStyle}>{item.seat}</Text>
        <Text style={textStyle}>{item.pulse}</Text>
        <Text style={textStyle}>{item.presure}</Text>
        <Text style={textStyle}>{item.temp}</Text>
        <Text style={textStyle}>{item.oxygen}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 10 }}>OHMS</Text>
      <FlatList
        data={passengers}
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
        keyExtractor={(item) => item.seat}
        style={{ flex: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    backgroundColor: '#f5f5f5', 
  },
  headerRow: {
    backgroundColor: '#e6e6e6', 
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color: '#333', 
  },
  headerCell: {
    fontWeight: 'bold',
    backgroundColor: 'royalblue',
    color: 'white', 
  },
  yellowRow: {
    backgroundColor: '#fdfd96', 
  },
  redRow: {
    backgroundColor: '#ff6961', 
  },
  boldText: {
    fontWeight: 'bold',
  }
});

export default App;
