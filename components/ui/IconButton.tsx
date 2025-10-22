import { Pressable } from 'react-native';
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
    <Pressable onPress={presionar} className="bg-[#A69580] rounded-xl border-gray-200 p-4 flex-row items-center gap-x-2">
      <Ionicons name = {iconName as any} size={size} color={color}/>
      {title && <CustomText value={title} variant="titleSecondary" />}
    </Pressable>
  )
}

export default IconButton;
