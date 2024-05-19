import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';

const App = () => {
  const [passengers, setPassengers] = useState([
    { seat: '12A', name: 'John Smith', temp: '36.2 °C', pulse: '120 BPM', oxygen: '98%', bp: '120/70 mmHg' },
    { seat: '19D', name: 'Jane Doe', temp: '36.7 °C', pulse: '101 BPM', oxygen: '95%', bp: '140/90 mmHg' },
  ]);

  const renderHeader = () => (
    <View style={styles.row}>
      <Text style={[styles.cell, styles.headerCell]}>Seat</Text>
      <Text style={[styles.cell, styles.headerCell]}>Passenger</Text>
      <Text style={[styles.cell, styles.headerCell]}>Temp</Text>
      <Text style={[styles.cell, styles.headerCell]}>Pulse</Text>
      <Text style={[styles.cell, styles.headerCell]}>Oxygen</Text>
      <Text style={[styles.cell, styles.headerCell]}>BP</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.seat}</Text>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.temp}</Text>
      <Text style={styles.cell}>{item.pulse}</Text>
      <Text style={styles.cell}>{item.oxygen}</Text>
      <Text style={styles.cell}>{item.bp}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 10 }}>Passengers on flight</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri: 'https://example.com/image.jpg' }} style={{ width: 150, height: 100, marginRight: 10 }} />
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
