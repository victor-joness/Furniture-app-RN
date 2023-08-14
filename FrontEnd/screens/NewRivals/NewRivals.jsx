import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import styles from "./NewRivals.style";
import { Ionicons } from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";
import { ProductList } from "../../components";

const NewRivals = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-circle"
              size={30}
              color={COLORS.lightWhite}
              style={{marginLeft: 2}}
            />
          </TouchableOpacity>

          <Text style={styles.heading}> Produtos </Text>
        </View>
        <ProductList/>
      </View>
    </SafeAreaView>
  );
};

export default NewRivals;
