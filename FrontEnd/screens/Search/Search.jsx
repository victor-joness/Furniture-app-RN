import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../constants";
import { Feather, Ionicons } from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./Search.style";
import axios from "axios";
import { SearchTile } from "../../components";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");

  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://10.0.2.2:3001/api/products/search/${searchKey}`
      );
      setSearchResult(response.data);
    } catch (error) {
      console.log("falha em pegar os produtos");
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="Faça uma pesquisa"
            style={styles.searchInput}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => handleSearch()}
          >
            <Feather name="search" size={24} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
      {searchResult.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image
            source={require("../../assets/images/Pose23.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchResult}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <SearchTile item={item} />}
          style={{marginHorizontal: 12}}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
