import React, { useState } from 'react';
import { View, Image, Text, Table, TableView, Section } from 'react-native';

const App = () => {
  const [passengers, setPassengers] = useState([
    { seat: '12A', name: 'John Smith', temp: '36.2 °C', pulse: '120 BPM', oxygen: '98%', bp: '120/70 mmHg' },
    { seat: '19D', name: 'Jane Doe', temp: '36.7 °C', pulse: '101 BPM', oxygen: '95%', bp: '140/90 mmHg' },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 10 }}>Passengers on flight</Text>
      <View style={{ flexDirection: 'row' }}>
        <Image source={{ uri: 'https://example.com/image.jpg' }} style={{ width: 150, height: 100, marginRight: 10 }} />
        <TableView>
          <Section>
            <Table>
              <Table.Row>
                <Table.Cell textStyle={{ fontWeight: 'bold' }}>Seat</Table.Cell>
                <Table.Cell textStyle={{ fontWeight: 'bold' }}>Passenger</Table.Cell>
                <Table.Cell textStyle={{ fontWeight: 'bold' }}>Temp</Table.Cell>
                <Table.Cell textStyle={{ fontWeight: 'bold' }}>Pulse</Table.Cell>
                <Table.Cell textStyle={{ fontWeight: 'bold' }}>Oxygen</Table.Cell>
                <Table.Cell textStyle={{ fontWeight: 'bold' }}>BP</Table.Cell>
              </Table.Row>
            </Table>
          </Section>

          {passengers.map((passenger) => (
            <Section key={passenger.seat}>
              <Table>
                <Table.Row>
                  <Table.Cell>{passenger.seat}</Table.Cell>
                  <Table.Cell>{passenger.name}</Table.Cell>
                  <Table.Cell>{passenger.temp}</Table.Cell>
                  <Table.Cell>{passenger.pulse}</Table.Cell>
                  <Table.Cell>{passenger.oxygen}</Table.Cell>
                  <Table.Cell>{passenger.bp}</Table.Cell>
                </Table.Row>
              </Table>
            </Section>
          ))}
        </TableView>
      </View>
    </View>
  );
};

export default App;
