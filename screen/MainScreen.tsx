import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const MainScreen = () => {
  const [place, setPlace] = useState('');
  const [date, setDate] = useState('');
  const [photoUrl, setPhotoUrl] = useState(''); // State untuk menyimpan URL foto
  const [description, setDescription] = useState('');
  const [tripEntries, setTripEntries] = useState([
    {
      id: '1',
      place: 'Eiffel Tower, Paris',
      date: '2023-07-01',
      photoUrl: 'https://asset.kompas.com/crops/ua3JsP2XI8fJo3dvIuOO0FzBnHA=/0x0:1024x683/750x500/data/photo/2022/05/05/6273457a5606c.jpg',
      description: 'Visited the iconic Eiffel Tower in Paris.',
    },
    {
      id: '2',
      place: 'Grand Canyon, USA',
      date: '2023-07-05',
      photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Canyon_River_Tree_%28165872763%29.jpeg/1200px-Canyon_River_Tree_%28165872763%29.jpeg',
      description: 'Explored the stunning Grand Canyon in Arizona.',
    },
  ]);

  const handleSubmit = () => {
    // Menyimpan entri trip ke dalam state tripEntries
    const newEntry = {
      id: String(tripEntries.length + 1), // Menggunakan panjang array untuk id unik sementara
      place,
      date,
      photoUrl,
      description,
    };
    setTripEntries([...tripEntries, newEntry]);

    // Reset form setelah submit
    setPlace('');
    setDate('');
    setPhotoUrl('');
    setDescription('');
  };

  const handleDeleteEntry = (id: string) => {
    const filteredEntries = tripEntries.filter(entry => entry.id !== id);
    setTripEntries(filteredEntries);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Diary Trip</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nama Tempat"
          value={place}
          onChangeText={text => setPlace(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Tanggal Kunjungan"
          value={date}
          onChangeText={text => setDate(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="URL Dokumentasi Foto"
          value={photoUrl}
          onChangeText={text => setPhotoUrl(text)}
        />
        <TextInput
          style={[styles.textInput, { height: 100 }]}
          placeholder="Deskripsi Trip"
          value={description}
          onChangeText={text => setDescription(text)}
          multiline
        />
        <Button
          title="Simpan"
          onPress={handleSubmit}
          color="#4682B4" // Steel Blue
        />
      </View>
      <View style={styles.tripEntriesContainer}>
        <Text style={styles.subheader}>Entri Trip:</Text>
        <FlatList
          data={tripEntries}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.tripEntry}>
              <View style={{ flex: 1 }}>
                <Text style={styles.tripEntryTitle}>{item.place}</Text>
                <Text>{item.date}</Text>
                {item.photoUrl ? (
                  <Image source={{ uri: item.photoUrl }} style={styles.tripEntryImage} />
                ) : (
                  <Text>No Image</Text>
                )}
                <Text>{item.description}</Text>
              </View>
              <TouchableOpacity onPress={() => handleDeleteEntry(item.id)} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Hapus</Text>
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
    backgroundColor: '#f0f0f0', // Abu-abu
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
    borderColor: '#A9A9A9', // Abu-abu tua
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
    backgroundColor: '#d3d3d3', // Abu-abu muda
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  tripEntryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tripEntryImage: {
    width: '100%',
    height: 150,
    marginBottom: 5,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#4682B4', // Orange
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
  },
});

export default MainScreen;
