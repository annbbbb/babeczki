import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const App = () => {
const [passengers, setPassengers] = useState([
{ lp: '1', seat: '12A', pulse: '65 BPM', pressure: '120/70 mm Hg', oxygen: '98%', temp: '36,2 °C' },
{ lp: '2', seat: '19D', pulse: '101 BPM', pressure: '140/90 mm Hg', oxygen: '95%', temp: '36,7 °C' },
{ lp: '3', seat: '33C', pulse: '76 BPM', pressure: '120/90 mm Hg', oxygen: '98%', temp: '35,7 °C' },
{ lp: '4', seat: '39A', pulse: '127 BPM', pressure: '172/90 mm Hg', oxygen: '98%', temp: '37,2 °C' }
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
    <Text style={textStyle}>{item.pressure}</Text>
    <Text style={textStyle}>{item.temp}</Text>
    <Text style={textStyle}>{item.oxygen}</Text>
  </View>
);
};

return (
<View style={styles.container}>
<Text style={styles.title}>OHMS</Text>
<View style={styles.table}>
{renderHeader()}
<FlatList
data={passengers}
renderItem={renderItem}
keyExtractor={(item) => item.seat}
/>
</View>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFF', // Light gray background for the container
padding: 20,
},
title: {
fontSize: 24,
textAlign: 'center',
marginVertical: 20,
fontWeight: 'bold',
},
table: {
backgroundColor: '#EAEAEA', 
borderRadius: 10, // Rounded corners
padding: 10,
},
row: {
flexDirection: 'row',
borderBottomColor: '#FFF', 
borderBottomWidth: 2,
paddingVertical: 15,
},
headerRow: {
backgroundColor: '#e6e6e6', // Light background for header
borderBottomColor: '#EAEAEA', // Light gray border for header
borderBottomWidth: 1,
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
