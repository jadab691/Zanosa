import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";

// Reusable Menu Item
// @ts-ignore
const MenuItem = ({ icon, label, color = "#292323", onPress }) => (
  <Pressable style={styles.menuItem} onPress={onPress}>
    <Ionicons name={icon} size={22} color={color} />
    <Text style={[styles.menuText, { color }]}>{label}</Text>
  </Pressable>
);

// Main Menu Component
const Menu = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Menu</Text>

      {/* Menu Items */}
      <MenuItem icon="person-outline" label="Profile" onPress={() => router.push("/stack/profile")} />
      <MenuItem icon="settings-outline" label="Settings" onPress={undefined} />
      <MenuItem
        icon="information-circle-outline"
        label="About"
        onPress={undefined}
      />
      <MenuItem icon="call-outline" label="Contact" onPress={undefined} />
      <MenuItem
        icon="alert-circle-outline"
        label="Report a Problem"
        onPress={undefined}
      />
      <MenuItem
        icon="log-out-outline"
        label="Logout"
        color="red"
        onPress={() => router.push("/stack/login")}
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 15,
    backgroundColor: "#f0f0f0",
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2, // Android shadow
  },

  menuText: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: "500",
  },
});
