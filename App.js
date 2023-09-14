import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';
import Constants from 'expo-constants'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>A few options for the statusbar</Text>
      <Text>It is now set to have a black background and white text</Text>
      <StatusBar 
      style="light"
      backgroundColor='black'
      //hidden={true}
       />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
});
