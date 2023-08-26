import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

import { COLORS, SIZES } from "../../constants/index";

const Carousel = () => {
  const sliders = [
    "https://www.thespruce.com/thmb/KfoV48asKqAuv13XTB__V5T7Te0=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc()/furniture-showroom-with-plants--spotlights-and-brick-wall-1285065780-92c7c9790c3746ba96c351ab5ead8d40.jpg",
    "https://goodhomes.wwmindia.com/content/2020/oct/0006--venturafadd1603192529.jpg",
    "https://www.decorilla.com/online-decorating/wp-content/uploads/2022/07/High-end-brands-furniture-Amelia-R.jpeg",
  ];

  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={sliders}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "93%",
          marginTop: 15,
        }}
        autoplay
        circleLoop
      ></SliderBox>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
