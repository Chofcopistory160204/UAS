import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const Noted = () => {
  const [noteText, setNoteText] = useState('');
  const [notes, setNotes] = useState([
    {
      id: '1',
      noteText: 'Catatan Brang yang perlu dibawa :',
    },
    {
      id: '2',
      noteText: 'Barang yang perlu di beli: ',
    },
  ]);

  const handleSubmit = () => {
    // Menyimpan catatan ke dalam state notes
    const newNote = {
      id: String(notes.length + 1), // Menggunakan panjang array untuk id unik sementara
      noteText,
    };
    setNotes([...notes, newNote]);

    // Reset form setelah submit
    setNoteText('');
  };

  const handleDeleteEntry = (id: string) => {
    const filteredNotes = notes.filter(note => note.id !== id);
    setNotes(filteredNotes);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Noted</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your note..."
          value={noteText}
          onChangeText={text => setNoteText(text)}
          multiline
        />
        <Button
          title="Save"
          onPress={handleSubmit}
          color="#4682B4" // Steel Blue
        />
      </View>
      <View style={styles.notesContainer}>
        <Text style={styles.subheader}>Saved Notes:</Text>
        <FlatList
          data={notes}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.note}>
              <Text style={styles.noteText}>{item.noteText}</Text>
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
    height: 100,
    borderColor: '#A9A9A9', // Dark grey
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  notesContainer: {
    marginBottom: 20,
  },
  subheader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4682B4', // Steel Blue
  },
  note: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d3d3d3', // Light grey
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  noteText: {
    flex: 1,
    fontSize: 16,
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

export default Noted;
