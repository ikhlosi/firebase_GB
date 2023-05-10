import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Products = () => {
  useEffect(() => {
    // Get the collection `products`
    const dbRef = collection(db, "products");

    getDocs(dbRef).then((qs) => {
      qs.forEach((doc) => {
        console.log(`doc.id => ${JSON.stringify(doc.data(), null, 2)}`);
      });
    });
  }, []);

  return (
    <View>
      <Text>Products</Text>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
