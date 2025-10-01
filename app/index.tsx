// ../ui/IconButton.tsx
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import "../global.css";

function IconButton({ iconName, color, size, presionar }) {
  return (
    <Pressable
      onPress={presionar}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={iconName} size={size} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
