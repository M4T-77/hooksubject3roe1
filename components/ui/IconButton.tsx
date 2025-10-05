import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import CustomText from './CustomText';

interface IconButtonProps {
  iconName: string;
  color: string;
  size: number;
  presionar?: () => void;
  title?: string;
}

function IconButton({ iconName, color, size, presionar, title }: IconButtonProps) {
  return (
    <Pressable
      onPress={presionar}
      style={({ pressed }) => pressed && styles.pressed}
      className="flex-row items-center bg-gray-500/50 p-3 rounded-xl gap-2"
    >
      <Ionicons name={iconName as keyof typeof Ionicons.glyphMap} size={size} color={color} />
      {title && <CustomText variant="title" value={title} />}
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
