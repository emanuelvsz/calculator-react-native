import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.calc_section}>
        <View style={styles.headerSection}>
          <TextInput style={styles.dataInput} placeholder="1"/>
          <TextInput style={[styles.dataInput, {width: '20%'}]} placeholder="+"/>
          <TextInput style={styles.dataInput} placeholder="2"/>
        </View>
        <Button style={styles.btn}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calc_section: {
    width: '80%',
    height: '50%',
    backgroundColor: '#0e0e0e',
    borderRadius: '2%'
  },
  headerSection: {
    flex: 1,
    height: '3%',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dataInput: {
    backgroundColor: '#fff',
    borderRadius: '3%',
    width: '37%',
    height: '10%',
    paddingHorizontal: 10
  },
  btn: {
    backgroundColor: 'white',
    height: 80,
    width: '100%'
  }
});
