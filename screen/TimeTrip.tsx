import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const TimeTrip = () => {
  const [place, setPlace] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [tripEntries, setTripEntries] = useState([
    {
      id: '1',
      place: 'Eiffel Tower, Paris',
      date: '2023-07-01',
      
    },
    {
      id: '2',
      place: 'Grand Canyon, USA',
      date: '2023-07-05',
      
    },
  ]);

  const handleSubmit = () => {
    // Menyimpan entri trip ke dalam state tripEntries
    const newEntry = {
      id: String(tripEntries.length + 1), // Menggunakan panjang array untuk id unik sementara
      place,
      date,
      description,
    };
    setTripEntries([...tripEntries, newEntry]);

    // Reset form setelah submit
    setPlace('');
    setDate('');
    setDescription('');
  };

  const handleDeleteEntry = (id: string) => {
    const filteredEntries = tripEntries.filter(entry => entry.id !== id);
    setTripEntries(filteredEntries);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Time To Trip</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Place"
          value={place}
          onChangeText={text => setPlace(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Date of Visit"
          value={date}
          onChangeText={text => setDate(text)}
        />
        
        <Button
          title="Save"
          onPress={handleSubmit}
          color="#4682B4" // Steel Blue
        />
      </View>
      <View style={styles.tripEntriesContainer}>
        <Text style={styles.subheader}>Trip Entries:</Text>
        <FlatList
          data={tripEntries}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.tripEntry}>
              <View style={{ flex: 1 }}>
                <Text style={styles.tripEntryTitle}>{item.place}</Text>
                <Text>{item.date}</Text>
              </View>
              <TouchableOpacity onPress={() => handleDeleteEntry(item.id)} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f0f0', // Light grey
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#4682B4', // Steel Blue
  },
  inputContainer: {
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    borderColor: '#A9A9A9', // Dark grey
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  tripEntriesContainer: {
    marginBottom: 20,
  },
  subheader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4682B4', // Steel Blue
  },
  tripEntry: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d3d3d3', // Light grey
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  tripEntryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  deleteButton: {
    backgroundColor: '#4682B4', // Steel Blue
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
  },
});

export default TimeTrip;
