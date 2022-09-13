import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Petruquezi Soares</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d115a",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: '#FFF',
    fontSize: 34,
    fontWeight: "bold"
  }
});
