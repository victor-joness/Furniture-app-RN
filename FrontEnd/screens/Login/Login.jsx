import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackBtn, Button } from "../../components";

import { Formik, formik } from "formik";
import * as Yup from "yup";

import axios from "axios";

import styles from "./Login.style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { TextInput } from "react-native-gesture-handler";

import AsyncStorage from "@react-native-async-storage/async-storage";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email invalido").required("É Obrigatório"),
  password: Yup.string()
    .min(8, "Muito Curta")
    .max(50, "Muito Longa")
    .required("É Obrigatório"),
});

const Login = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState("");
  const [obscureText, setObscureText] = useState(false);

  const inValidForm = () => {
    Alert.alert(
      "Invalid Form",
      "Por favor preenchar todos os dados corretamente",
      [{ defaultIndex: 1 }]
    );
  };

  const login = async (values) => {
    setLoader(true);

    try {
      const endPoint = "http://10.0.2.2:3001/api/login";
      const data = values;
      const response = await axios.post(endPoint, data);

      if (response.status === 200) {
        setLoader(false);

        setResponseData(response.data);

        console.log(responseData);

        await AsyncStorage.setItem(
          `user${responseData._id}`,
          JSON.stringify(responseData)
        );

        await AsyncStorage.setItem(`id`, JSON.stringify(responseData._id));

        navigation.replace("Bottom Navigation");
      } else {
        Alert.alert(
          "Error em fazer o login",
          "Por favor, confira os dados e tente novamente",
          [{ defaultIndex: 1 }]
        );
      }
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Error",
        "Ops, algo deu errado, confira os dados e tente novamente",
        [{ defaultIndex: 1 }]
      );
    } finally {
      setLoader(false);
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={{ marginHorizontal: 20 }}>
        <View>
          <BackBtn onPress={() => navigation.goBack()} />
          <Image
            source={require("../../assets/images/bk.png")}
            style={styles.cover}
          />
          <Text style={styles.title}>Unlimited Luxurius Furniture</Text>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              login(values);
            }}
          >
            {({
              handleChange,
              handleBlur,
              touched,
              handleSubmit,
              values,
              errors,
              isValid,
              setFieldTouched,
            }) => (
              <View>
                <View style={styles.wrapper}>
                  <Text style={styles.label}>Email</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.email ? COLORS.secondary : COLORS.offwhite
                    )}
                  >
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={25}
                      color={COLORS.gray}
                      style={styles.iconStyle}
                    />
                    <TextInput
                      placeholder="Seu Email"
                      onFocus={() => {
                        setFieldTouched("email");
                      }}
                      onBlur={() => {
                        setFieldTouched("email", "");
                      }}
                      value={values.email}
                      onChangeText={handleChange("email")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                  </View>
                  {touched.email && errors.email && (
                    <Text style={styles.errorMensagem}>{errors.email}</Text>
                  )}
                </View>

                <View style={styles.wrapper}>
                  <Text style={styles.label}>Senha</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.password ? COLORS.secondary : COLORS.offwhite
                    )}
                  >
                    <MaterialCommunityIcons
                      name="lock-outline"
                      size={25}
                      color={COLORS.gray}
                      style={styles.iconStyle}
                    />
                    <TextInput
                      secureTextEntry={obscureText}
                      placeholder="Sua Senha"
                      onFocus={() => {
                        setFieldTouched("password");
                      }}
                      onBlur={() => {
                        setFieldTouched("password", "");
                      }}
                      value={values.password}
                      onChangeText={handleChange("password")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />

                    <TouchableOpacity
                      onPress={() => {
                        setObscureText(!obscureText);
                      }}
                    >
                      <MaterialCommunityIcons
                        name={obscureText ? "eye-outline" : "eye-off-outline"}
                        size={25}
                      />
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password && (
                    <Text style={styles.errorMensagem}>{errors.password}</Text>
                  )}
                </View>
                <Button
                  title={"L O G I N"}
                  onPress={isValid ? handleSubmit : inValidForm}
                  isValid={isValid}
                  loader={loader}
                />
                <Text
                  style={styles.registration}
                  onPress={() => {
                    navigation.navigate("Registration");
                  }}
                >
                  Registra-se
                </Text>
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;
