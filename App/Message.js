import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const MessageScreen = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Call backend API to send a message
    // Handle response and show success message
  };

  return (
    <View>
      <TextInput
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
      />
      <Button
        title="Send Message"
        onPress={handleSendMessage}
      />
    </View>
  );
};

export default MessageScreen;
