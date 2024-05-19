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
    <View style={styles.container}>
      <Text style={styles.title}>OHMS</Text>
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
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0', // Light gray background for the container
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#fff', // White border between rows
    paddingVertical: 15,
    backgroundColor: '#EAEAEA', // Light gray background for rows
    paddingHorizontal: 10,
  
    borderRadius: 10, // Rounded corners
  },
  headerRow: {
    backgroundColor: '#e6e6e6', // Light background for header
    borderBottomColor: '#fff', // White border for header
    borderBottomWidth: 0,

  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color: '#333', // Dark gray text for cells
  },
  headerCell: {
    fontWeight: 'bold',
  },
  yellowRow: {
    backgroundColor: '#FAF19D', // Yellow background for specific row
  },
  redRow: {
    backgroundColor: '#BD3B59', // Red background for specific row
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default App;
