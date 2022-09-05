import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

const window = useWindowDimensions();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e0e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calc_section: {
    width: 200,
    height: 100,
    backgroundColor: '#fff'
  }
});
