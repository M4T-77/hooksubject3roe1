import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';

// Mock data for the sections
const recentlyPlayed = [
  { id: 1, name: 'Canciones que te gustan', image: 'https://misc.scdn.co/liked-songs/liked-songs-640.png' },
  { id: 2, name: 'The Weeknd', image: 'https://i.scdn.co/image/ab6761610000e5ebc151ba5743b57a82be27af49' },
  { id: 3, name: 'Starboy', image: 'https://i.scdn.co/image/ab67616d0000b273e21cc1dbf1057f7560b2b804' },
  { id: 4, name: 'Chill Mix', image: 'https://seeded-mix-images.scdn.co/v2/img/chill/1x1_1s246Q3KqfSo92TbfqxfwP/en/default' },
];

const heavyRotation = [
  { id: 1, name: 'Daily Mix 1', image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebc151ba5743b57a82be27af49/1/en/default' },
  { id: 2, name: 'Abhijay', image: 'https://i.scdn.co/image/ab67706c0000da84f1b8f0a0a0a0a0a0a0a0a0a0' },
  { id: 3, name: 'Discover Weekly', image: 'https://newjams-images.scdn.co/v2/discover-weekly/aAbca4e952a0_1x1_1s246Q3KqfSo92TbfqxfwP/en/default' },
  { id: 4, name: 'Radar de novedades', image: 'https://newjams-images.scdn.co/v2/release-radar/aAbca4e952a0_1x1_1s246Q3KqfSo92TbfqxfwP/en/default' },
];

const newReleases = [
  { id: 1, name: 'Happier Than Ever', artist: 'Billie Eilish', image: 'https://i.scdn.co/image/ab67616d0000b2738a6a62c6b412b1c0b4a0b5a0' },
  { id: 2, name: '30', artist: 'Adele', image: 'https://i.scdn.co/image/ab67616d0000b273bde2e0a2c0f0d3d5d1a0b5a0' },
  { id: 3, name: '=', artist: 'Ed Sheeran', image: 'https://i.scdn.co/image/ab67616d0000b273c1c7c9a0a0a0a0a0a0a0a0a0' },
  { id: 4, name: 'Montero', artist: 'Lil Nas X', image: 'https://i.scdn.co/image/ab67616d0000b273a0a0a0a0a0a0a0a0a0a0a0a0' },
];

const popularArtists = [
  { id: 1, name: 'Drake', image: 'https://i.scdn.co/image/ab6761610000e5ebc151ba5743b57a82be27af49' },
  { id: 2, name: 'Ice Cube', image: 'https://i.scdn.co/image/ab6761610000e5ebc151ba5743b57a82be27af49' },
  { id: 3, name: 'Bad Bunny', image: 'https://i.scdn.co/image/ab6761610000e5ebc151ba5743b57a82be27af49' },
  { id: 4, name: 'The Weeknd', image: 'https://i.scdn.co/image/ab6761610000e5ebc151ba5743b57a82be27af49' },
];

const DashboardScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Header */}
        <View className="px-4 pt-8">
          <Text className="text-secondary text-3xl font-bold">Buenos días</Text>
        </View>

        <View className="mt-8">
          <View className="flex-row flex-wrap justify-between px-4">
            {recentlyPlayed.map(item => (
              <TouchableOpacity 
                key={item.id}
                className="w-[48%] bg-spotify-gray rounded-md flex-row items-center mb-4"
                onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}
                activeOpacity={0.7}
                >
                <Image source={{ uri: item.image }} className="w-16 h-16 rounded-l-md" />
                <Text className="text-secondary font-semibold ml-4">{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="mt-8 px-4">
          <Text className="text-secondary text-2xl font-bold mb-4">Tus álbumes más escuchados</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {heavyRotation.map(item => (
              <TouchableOpacity 
                key={item.id} 
                className="mr-4 w-40"                
                onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}
                activeOpacity={0.7}
                >
                <Image source={{ uri: item.image }} className="w-40 h-40 rounded-md" />
                <Text className="text-secondary font-semibold mt-2" numberOfLines={2}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View className="mt-8 px-4">
          <Text className="text-secondary text-2xl font-bold mb-4">Nuevos lanzamientos para ti</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {newReleases.map(item => (
              <TouchableOpacity 
                key={item.id} 
                className="mr-4 w-40"
                onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}
                activeOpacity={0.7}
              >
                <Image source={{ uri: item.image }} className="w-40 h-40 rounded-md" />
                <Text className="text-secondary font-semibold mt-2" numberOfLines={1}>{item.name}</Text>
                <Text className="text-spotify-lightgray" numberOfLines={1}>{item.artist}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View className="mt-8 px-4">
          <Text className="text-secondary text-2xl font-bold mb-4">Artistas populares</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {popularArtists.map(item => (
              <TouchableOpacity 
                key={item.id} 
                className="mr-4 w-40 items-center"
                onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}
                activeOpacity={0.7}
              >
                <Image source={{ uri: item.image }} className="w-40 h-40 rounded-full" />
                <Text className="text-secondary font-semibold mt-2">{item.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

export default DashboardScreen;
