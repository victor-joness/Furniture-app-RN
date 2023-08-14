import { Text, View, Image } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import styles from "./ProductDetails.style";
import { TouchableOpacity } from "react-native";
import {
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES } from "../../constants";

const ProductDetails = () => {
  const route = useRoute();
  const {item} = route.params;
  const navigation = useNavigation();

  const [count, setCount] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <Image
        source={{
          uri: item.imageUrl,
        }}
        style={styles.image}
      ></Image>

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$ {item.price}</Text>
          </View>
        </View>
      </View>

      <View style={styles.ratingRow}>
        <View style={styles.rating}>
          {[1, 2, 3, 4, 5].map((id) => (
            <Ionicons key={id} name="star" size={24} color="gold"></Ionicons>
          ))}
          <Text style={styles.ratingText}> (4.9)</Text>
        </View>

        <View style={styles.rating}>
          <TouchableOpacity onPress={() => setCount(count + 1)}>
            <SimpleLineIcons name="plus" size={20} />
          </TouchableOpacity>
          <Text style={styles.ratingText}> {count} </Text>
          <TouchableOpacity
            onPress={() => {
              if (count > 1) {
                setCount(count - 1);
              }
            }}
          >
            {/*setCount(Math.max(count - 1, 1)); sao a mesma coisa  */}
            <SimpleLineIcons name="minus" size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.description}>Descrição</Text>
        <Text style={styles.descText}>
          {item.description}
        </Text>
      </View>

      <View style={{ marginBottom: SIZES.small }}>
        <View style={styles.location}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="location-outline" size={20} />
            <Text> {item.product_location}</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
            <Text> Frete Grátis</Text>
          </View>
        </View>
      </View>

      <View style={styles.cartRow}>
        <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
          <Text style={styles.cartTitle}> Compre Agora </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.addCartBtn}>
          <Fontisto name="shopping-bag" size={24} color={COLORS.lightWhite} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;
