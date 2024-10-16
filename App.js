import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { FontAwesome } from '@expo/vector-icons';

const Stack = createStackNavigator();

// WelcomeScreen Component
const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/Welcome.png')}
        style={styles.image}
      >
        <View style={styles.overlayContainer}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.title}>to our store</Text>
          <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('LoginScreen')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

// PhoneNumberInput (LoginScreen) Component
const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('BD');

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/Login.png')}
        style={styles.foodImage}
        resizeMode="contain"
      />
      <Text style={styles.mainText}>Get your groceries</Text>
      <Text style={styles.mainText}>with nectar</Text> 
      <PhoneInput
        defaultValue={phoneNumber}
        defaultCode={countryCode}
        onChangeFormattedText={(text) => setPhoneNumber(text)}
        containerStyle={styles.phoneInputContainer}
        textContainerStyle={styles.textInputContainer}
        flagButtonStyle={styles.flagStyle}
        textInputStyle={styles.textInput}
      />
      <Text style={styles.orText}>Or connect with social media</Text>
      <TouchableOpacity style={styles.socialButton}>
        <FontAwesome name="google" size={24} color="white" style={styles.icon} />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
        <FontAwesome name="facebook" size={24} color="white" />
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

// Main App Component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen 
          name="WelcomeScreen" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="LoginScreen" 
          component={PhoneNumberInput} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#53B175',
    paddingVertical: 25,
    paddingHorizontal: 10,
    borderRadius: 20,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Gilroy',
    color: '#fff',
    fontSize: 18,
  },
  foodImage: {
    width: 413.37,
    height: 374.15,
    marginBottom: 0,
  },
  mainText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  phoneInputContainer: {
    width: '100%',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    marginBottom: 20,
  },
  textInputContainer: {
    backgroundColor: '#f1f1f1',
  },
  flagStyle: {
    borderRadius: 5,
  },
  textInput: {
    fontSize: 16,
  },
  orText: {
    fontSize: 14,
    color: '#666',
    marginVertical: 10,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4285F4',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: '100%',
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  socialButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
});

export default App;

