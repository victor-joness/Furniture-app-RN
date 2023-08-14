import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../constants";

const styles = StyleSheet.create({
  cover: {
    height: SIZES.height / 2.4,
    width: SIZES.width - 40,
    resizeMode: "contain",
    marginBottom: SIZES.xxLarge,
  },
  title: {
    fontFamily: "bold",
    color: COLORS.primary,
    alignItems: "center",
    fontSize: SIZES.xLarge,
    marginBottom: SIZES.xxLarge,
  },
  wrapper: {
    marginBottom: 20,
  },
  label: {
    fontFamily: "regular",
    fontSize: SIZES.xSmall,
    marginBottom: 5,
    marginEnd: 5,
    textAlign: "right",
  },
  inputWrapper: (borderColor) => ({
    borderColor: borderColor,
    backgroundColor: COLORS.lightWhite,
    borderWidth: 1,
    height: 55,
    borderRadius: 12,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
  }),
  iconStyle: {
    marginRight: 10,
  },
  errorMensagem: {
    color: COLORS.red,
    fontFamily: "regular",
    marginTop: 5,
    marginLeft: 5,
    fontSize: SIZES.xSmall,
  },
  registration: {
    marginTop: 20,
    textAlign: "center",
  }
});

export default styles;
