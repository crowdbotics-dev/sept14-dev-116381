import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled6 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable><View style={styles.NNcEJJEQ}></View></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled8");
      }}><View style={styles.hwOdXpbX}></View></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  NNcEJJEQ: {
    height: 242,
    width: 255,
    backgroundColor: "#de1515",
    borderRadius: 0,
    color: "#777777",
    left: 47,
    top: 61,
    position: "absolute",
    borderColor: "#040101",
    opacity: 1,
    borderWidth: 19,
    transform: [{
      rotate: "45deg"
    }]
  },
  hwOdXpbX: {
    width: 80,
    height: 80,
    backgroundColor: "#4725b2",
    borderRadius: 24,
    position: "absolute",
    left: 134,
    top: 148,
    borderWidth: 6,
    opacity: 0.78
  }
});
export default Untitled6;