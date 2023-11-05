import { StatusBar, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../constants/theme";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import { ToastAndroid } from "react-native";

const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const submitForm = async () => {
    try {
      const res = await axios.post(
        `http://192.168.29.156:3001/api/submit-form`, // Change the ip address to your local ipv4 address
        {
          email,
          name,
        }
      );

      if (res.status === 200) {
        setEmail("");
        setName("");
        console.log(res.data);
        ToastAndroid.show(`${res.data.message}`, ToastAndroid.LONG);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const inputs = [
    {
      id: 1,
      title: "Email",
      placeholder: "Enter your email address",
      value: email,
      onChangeText: setEmail,
    },
    {
      id: 2,
      title: "Name",
      placeholder: "Enter your full name",
      value: name,
      onChangeText: setName,
    },
  ];

  return (
    <View style={styles.formContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Form</Text>
        <View style={styles.inputContainer}>
          {inputs.map((i) => {
            return (
              <View style={styles.input} key={i.id}>
                <Text style={styles.inputTitle}>{i.title}</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder={i.placeholder}
                  placeholderTextColor={COLORS.primary}
                  value={i.value}
                  onChangeText={i.onChangeText}
                />
              </View>
            );
          })}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={submitForm}
            disabled={!email || !name}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  container: {
    marginHorizontal: SIZES.medium,
  },
  title: {
    fontSize: SIZES.xxxLarge,
    alignSelf: "center",
  },
  inputContainer: {
    marginVertical: SIZES.medium,
    gap: 15,
  },
  button: {
    backgroundColor: COLORS.secondary,
    padding: SIZES.medium,
    borderRadius: SIZES.small,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
  },
  textInput: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
    backgroundColor: COLORS.third,
    padding: SIZES.medium,
    borderRadius: SIZES.small,
  },
});
