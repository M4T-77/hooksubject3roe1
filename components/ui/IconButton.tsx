import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

interface IconButtonProps {
  iconName: keyof typeof Ionicons.glyphMap;
  color: string;
  size: number;
  presionar: () => void;
}

function IconButton({ iconName, color, size, presionar }: IconButtonProps) {
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
