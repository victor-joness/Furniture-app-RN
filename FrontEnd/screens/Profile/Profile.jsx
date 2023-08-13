import {
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";

import styles from "./Profile.style";
import { COLORS } from "../../constants";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState({username: "teste", email: "teste"});
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    checkExistingUser();
  }, []);

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem("id");
    const userId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(userId);

      if (currentUser !== null) {
        const userData = JSON.parse(currentUser);
        setUserLogin(true);
        setUserData(userData);
      } else {
        navigation.navigate("Login");
      }
    } catch (error) {
      console.log("error é ", error);
    }
  };

  const userLogout = async () => {
    const id = await AsyncStorage.getItem("id");
    const userId = `user${JSON.parse(id)}`;

    try {
      await AsyncStorage.multiRemove([userId, 'id']);
      navigation.replace("Bottom Navigation");
    } catch (error) {
      console.log("error é ", error);
    }
  };

  const logout = () => {
    Alert.alert("Logout", "Você tem certeza que deseja sair da sua conta?", [
      {
        text: "Cancelar",
        onPress: () => console.log("Escolher cancelar o logout"),
      },
      {
        text: "Continuar",
        onPress: () => userLogout(),
      },
    ]);
  };

  const clearCache = () => {
    Alert.alert(
      "Clear Cache",
      "Você tem certeza que quer deletar todos os dados do seu celular",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancelou o clear cache"),
        },
        {
          text: "Continuar",
          onPress: () => console.log("Continuou o clear cache"),
        },
        /* { defaultIndex: 1 }, */
      ]
    );
  };

  const deleteAccount = () => {
    Alert.alert(
      "Deletar Conta",
      "Você tem certeza que deseja Deletar tudo associado a sua conta ?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Escolher cancelar o delete"),
        },
        {
          text: "Continuar",
          onPress: () => console.log("Escolher continuar o delete"),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.gray} />

        <View style={{ width: "100%" }}>
          <Image
            source={require("../../assets/images/space.jpg")}
            style={styles.cover}
          />
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require("../../assets/images/profile.jpeg")}
            style={styles.profile}
          />
          <Text style={styles.name}>
            {userLogin === true
              ? userData.username
              : "Por favor, faça login na sua conta!"}
          </Text>
          {userLogin === false ? (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <View style={styles.loginBtn}>
                <Text style={styles.menuText}>L O G I N</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.loginBtn}>
              <Text style={styles.menuText}>
                {userLogin === true ? userData.email : "teste@gmail.com"}
              </Text>
            </View>
          )}

          {userLogin === false ? (
            <View></View>
          ) : (
            <ScrollView style={styles.menuWrapper}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Favorites")}
              >
                <View style={styles.menuItem(0.5)}>
                  <MaterialCommunityIcons
                    name="heart-outline"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuText}>Favoritos</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
                <View style={styles.menuItem(0.5)}>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuText}>Orders</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                <View style={styles.menuItem(0.5)}>
                  <MaterialCommunityIcons
                    name="bag-suitcase"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuText}>Cart</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => clearCache()}>
                <View style={styles.menuItem(0.5)}>
                  <MaterialCommunityIcons
                    name="cached"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuText}>Clear Cache</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => deleteAccount()}>
                <View style={styles.menuItem(0.5)}>
                  <MaterialCommunityIcons
                    name="delete-outline"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuText}>Deletar Conta</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => logout()}>
                <View style={styles.menuItem(0.5)}>
                  <MaterialCommunityIcons
                    name="logout"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuText}>Logout</Text>
                </View>
              </TouchableOpacity>

              <Text style={{ marginVertical: 7 * 2 }}>
                {" "}
                {"\n"}
                {/* é como se fosse 7 text junto, pra dar o espaço */}
              </Text>
            </ScrollView>
          )}
        </View>
      </View>
    </View>
  );
};

export default Profile;
