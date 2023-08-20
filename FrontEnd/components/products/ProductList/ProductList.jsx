import { Text, View, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import useFetch from "../../../hooks/useFetch";
import { COLORS, SIZES } from "../../../constants";
import styles from "./ProductList.style";
import ProductCartView from "../ProductCartView/ProductCartView";

const ProductList = () => {
  const { data, loading, error } = useFetch();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xLarge} color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => <ProductCartView item={item}/>}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      ></FlatList>
    </View>
  );
};

export default ProductList;
