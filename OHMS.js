import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';

const App = () => {
  const [passengers, setPassengers] = useState([
    {lp:'1', seat: '12A', pulse: '65 BPM', presure: '120/70 mm Hg',  oxygen: '98%', temp: '36,2 *C' },
    {lp:'2', seat: '19D', pulse: '101 BPM', presure: '140/90 mm Hg', oxygen: '95%', temp: '36,7 *C' },
    {lp:'3', seat: '33C', pulse: '76 BPM', presure: '120/90 mm Hg',  oxygen: '98%', temp: '35,7 *C' },
    {lp:'4', seat: '39A', pulse: '127 BPM', presure: '172/90 mm Hg', oxygen: '98%', temp: '37,2 *C' }
  ]);

  const renderHeader = () => (
    <View style={styles.row}>
      <Text style={[styles.cell, styles.headerCell]}>#</Text>
      <Text style={[styles.cell, styles.headerCell]}>Seat</Text>
      <Text style={[styles.cell, styles.headerCell]}>Pulse</Text>
      <Text style={[styles.cell, styles.headerCell]}>Presure</Text>
      <Text style={[styles.cell, styles.headerCell]}>Temp</Text>
      <Text style={[styles.cell, styles.headerCell]}>Oxygen</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.lp}</Text>
      <Text style={styles.cell}>{item.seat}</Text>
      <Text style={styles.cell}>{item.pulse}</Text>
      <Text style={styles.cell}>{item.presure}</Text>
      <Text style={styles.cell}>{item.temp}</Text>
      <Text style={styles.cell}>{item.oxygen}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 10 }}>OHMS</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <FlatList
          data={passengers}
          ListHeaderComponent={renderHeader}
          renderItem={renderItem}
          keyExtractor={(item) => item.seat}
          style={{ flex: 1 }}
        />
      </View>

    
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  headerCell: {
    fontWeight: 'bold',
  },
});

export default App;
