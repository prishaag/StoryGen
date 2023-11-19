import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const PostDepartureScreen = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handlePostDeparture = () => {
    // Call backend API to post departure details
    // Handle response and show success message
  };

  return (
    <View>
      <TextInput
        placeholder="Date"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        placeholder="Time"
        value={time}
        onChangeText={setTime}
      />
      <Button
        title="Post Departure"
        onPress={handlePostDeparture}
      />
    </View>
  );
};

export default PostDepartureScreen;
