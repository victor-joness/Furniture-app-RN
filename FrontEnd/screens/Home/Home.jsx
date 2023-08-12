import { Text, View, TouchableOpacity, ScrollView} from "react-native";
import React, {useEffect, useState} from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./Home.style";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { Welcome } from "../../components";
import Carousel from "../../components/Carousel/Carousel";
import Headings from "../../components/Headings/Headings";
import ProductRow from "../../components/products/ProductRow/ProductRow";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    checkExistingUser();
  }, []);

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem("id");
    const userId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(userId);

      if(currentUser !== null) {
        const userData = JSON.parse(currentUser);
        setUserLogin(true);
        setUserData(userData);
      }
    } catch (error) {
      console.log("error é ", error);
    }

  };

  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}> {userData ? userData.location : 'Shangai china'} </Text>

          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}> 8 </Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome/>
        <Carousel/>
        <Headings/>
        <ProductRow/>
        <Text style={{ marginVertical: 7 * 8 }}> {'\n'}{/* é como se fosse 7 text junto, pra dar o espaço */}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
