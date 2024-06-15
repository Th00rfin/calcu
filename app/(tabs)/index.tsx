import React, { useState } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import LinearGradient from 'react-native-linear-gradient';
const App: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [release, setRelease] = useState<boolean>(false);

  const handleRelease = () => {
    setRelease(true);
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.languageSelector}>
          <Text style={styles.languageText}>English (US)</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={setUsername}
              value={username}
              placeholder="Username"
              placeholderTextColor="#ccc"
              onPressOut={handleRelease}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Password"
              placeholderTextColor="#ccc"
              secureTextEntry
              onPressOut={handleRelease}
            />
          </View>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.forgotPassword}>Forgot Password</Text>
          <TouchableOpacity>
            <Text style={styles.createAccount}>Create Account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/insta-logo.png')} 
            style={styles.logo}
          />
        </View> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(#ff8a00, #da1b60)',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    padding: 10,
  },
  languageSelector: {
    marginVertical: 9,
  },
  languageText: {
    color: 'black',
    alignSelf: 'center',
  },
  form: {
    width: '100%',
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    color: 'white',
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  forgotPassword: {
    marginVertical: 10,
    color: 'white',
  },
  createAccount: {
    color: 'blue',
  },
  logoContainer: {
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default App;
