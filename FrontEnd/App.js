import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import {
  Cart,
  NewRivals,
  ProductDetails,
  Login,
  Orders,
  Favorites,
  Registration,
} from "./screens";

const Stack = createNativeStackNavigator();

export default function App() {
  componentDidMount = async () => {
    await Font.loadAsync({
      Ionicons: require("@expo/vector-icons/Ionicons"),
    });
    this.setState({ loading: false });
  };

  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    semiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    extraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Bottom Navigation"}
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={"Cart"}
          component={Cart}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={"ProductDetails"}
          component={ProductDetails}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={"ProductList"}
          component={NewRivals}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={"Login"}
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={"Orders"}
          component={Orders}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={"Favorites"}
          component={Favorites}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={"Registration"}
          component={Registration}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
