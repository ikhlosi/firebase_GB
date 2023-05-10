import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Products = () => {
  const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     // Get the collection `products`
  //     const dbRef = collection(db, "products");

  //     getDocs(dbRef)
  //       .then((qs) =>
  //         setProducts(
  //           qs.docs.map((doc) => {
  //             return {
  //               id: doc.id,
  //               ...doc.data(),
  //             };
  //           })
  //         )
  //       )
  //       .catch((err) => console.log(err));
  //   }, []);

  useEffect(() => {
    // Get the collection `products`
    const dbRef = collection(db, "products");

    const unsubscribe = onSnapshot(dbRef, (qs) =>
      setProducts(
        qs.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      )
    );
    return () => unsubscribe();
  }, []);

  return (
    <View>
      <Text>Products</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Text>
            {item.name} - {item.price}
          </Text>
        )}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
