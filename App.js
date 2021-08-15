import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  databaseURL: "https://halfdelivery.firebaseio.com",

  apiKey: "AIzaSyAknDiBmdh0MHd1WKQq4L3uYZFA700pfCE",
  authDomain: "halfdelivery.firebaseapp.com",
  projectId: "halfdelivery",
  storageBucket: "halfdelivery.appspot.com",
  messagingSenderId: "271269689660",
  appId: "1:271269689660:web:824d3f5729524c2d7dc639",
  measurementId: "G-2RENKVPGSM",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();

export const dbService = firebase.firestore();

export const onSubmit = () => {
  dbService
    .collection("YEAH")
    .add({
      msg: "data",
      createdAt: Date.now(),
    })
    .then(() => {
      console.log("Added!");
    });
  alert("함수 실행됨");
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Good Day!!</Text>
      <Button
        onPress={() => {
          onSubmit();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
