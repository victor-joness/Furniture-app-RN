import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index";

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    welcomeTxt: (color, top) => ({
        fontFamily: "regular",
        fontWeight: "bold",
        fontSize: SIZES.xxLarge - 5,
        color: color,
        marginTop: top,
        marginHorizontal: SIZES.small,
    }),
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        height: 50,
        marginHorizontal: SIZES.small,
    },
    searchIcon: {
        marginHorizontal: SIZES.xSmall,
        color: COLORS.gray,
        marginTop: SIZES.small,
        /* lineHeight: 50, */
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small,
    },
    searchInput: {
        fontFamily: "regular",
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.small,
    },
    searchBtn: {
        width: 50,
        height: "100%",
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.primary,
    }
});

export default styles;