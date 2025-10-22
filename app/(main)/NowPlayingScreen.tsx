import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function NowPlayingScreen() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [progress, setProgress] = useState(0.35);

  // Datos de la canción actual (puedes reemplazar con datos reales)
  const currentSong = {
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    image: 'https://via.placeholder.com/300?text=Album+Cover',
    duration: '3:20',
    currentTime: '1:08',
  };

  const playlist = [
    { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', isPlaying: true },
    { id: 2, title: 'Save Your Tears', artist: 'The Weeknd', isPlaying: false },
    { id: 3, title: 'Starboy', artist: 'The Weeknd ft. Daft Punk', isPlaying: false },
    { id: 4, title: 'Can\'t Feel My Face', artist: 'The Weeknd', isPlaying: false },
  ];

  const formatTime = (time) => time;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#121212' }}>
      {/* Header */}
      <View style={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ color: '#b3b3b3', fontSize: 14, fontWeight: '600' }}>REPRODUCIENDO AHORA</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={24} color="#b3b3b3" />
        </TouchableOpacity>
      </View>

      {/* Album Cover */}
      <View style={{ alignItems: 'center', marginVertical: 24 }}>
        <Image
          source={{ uri: currentSong.image }}
          style={{ width: 280, height: 280, borderRadius: 12 }}
        />
      </View>

      {/* Song Info */}
      <View style={{ paddingHorizontal: 16, marginBottom: 24 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 6 }}>{currentSong.title}</Text>
            <Text style={{ color: '#b3b3b3', fontSize: 16 }}>{currentSong.artist}</Text>
          </View>
          <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
            <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={28} color={isFavorite ? '#1db954' : '#b3b3b3'} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Progress Bar */}
      <View style={{ paddingHorizontal: 16, marginBottom: 12 }}>
        <View style={{ height: 4, backgroundColor: '#404040', borderRadius: 2, overflow: 'hidden', marginBottom: 8 }}>
          <View style={{ height: '100%', width: `${progress * 100}%`, backgroundColor: '#1db954' }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: '#b3b3b3', fontSize: 12 }}>{currentSong.currentTime}</Text>
          <Text style={{ color: '#b3b3b3', fontSize: 12 }}>{currentSong.duration}</Text>
        </View>
      </View>

      {/* Controls */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 16, marginVertical: 32 }}>
        <TouchableOpacity>
          <Ionicons name="shuffle" size={28} color="#b3b3b3" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="play-skip-back" size={32} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsPlaying(!isPlaying)} style={{ backgroundColor: '#1db954', width: 64, height: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center' }}>
          <Ionicons name={isPlaying ? 'pause' : 'play'} size={32} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="play-skip-forward" size={32} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="repeat" size={28} color="#b3b3b3" />
        </TouchableOpacity>
      </View>

      {/* Queue/Playlist */}
      <View style={{ marginTop: 32, paddingBottom: 32 }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', paddingHorizontal: 16, marginBottom: 16 }}>Cola de reproducción</Text>
        {playlist.map((song, index) => (
          <TouchableOpacity
            key={song.id}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 12,
              paddingHorizontal: 16,
              backgroundColor: song.isPlaying ? '#1db954' : 'transparent',
              borderRadius: song.isPlaying ? 8 : 0,
              marginHorizontal: song.isPlaying ? 16 : 0,
              marginBottom: song.isPlaying ? 8 : 0,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ color: song.isPlaying ? 'black' : 'white', fontSize: 14, fontWeight: song.isPlaying ? '700' : '500', marginBottom: 4 }}>
                {song.title}
              </Text>
              <Text style={{ color: song.isPlaying ? '#000000cc' : '#b3b3b3', fontSize: 12 }}>
                {song.artist}
              </Text>
            </View>
            {song.isPlaying && (
              <Ionicons name="play" size={20} color="black" />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}