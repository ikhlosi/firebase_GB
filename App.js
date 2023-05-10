import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Products from "./src/components/Products";

export default function App() {
  return (
    <View style={styles.container}>
      <Products />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
