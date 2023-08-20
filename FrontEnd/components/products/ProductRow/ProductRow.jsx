import { Text, View, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import ProductCartView from "../ProductCartView/ProductCartView";
import styles from "./ProductRow.style";
import useFetch from "../../../hooks/useFetch";
import { COLORS, SIZES } from "../../../constants";

const ProductRow = () => {
  const { data, loading, error } = useFetch();

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text> Error ao carregar </Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductCartView item={item}/>}
          horizontal
          contentContainerStyle={{ columnGap: 16 }}
        ></FlatList>
      )}
    </View>
  );
};

export default ProductRow;
