import { router } from 'expo-router'
import * as Haptics from 'expo-haptics'
import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import "@/global.css";

const index = () => {
  return (
    <View className="flex-1 bg-black">
      <View className="items-center pt-20 pb-10">
        <Image
          source={{ uri: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" }}
          className="w-40 h-40"
          resizeMode="contain"
        />
        <Text className="text-white text-4xl font-bold mt-6">Bienvenido</Text>
        <Text className="text-gray-400 text-lg mt-2">Millones de canciones te esperan</Text>
      </View>
      <View className="flex-1 justify-center px-8 gap-4">
        <TouchableOpacity
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
            router.push("/(auth)/SignUp")
          }}
          className="bg-[#1DB954] rounded-full py-4"
          activeOpacity={0.8}
        >
          <Text className="text-center text-black font-bold text-lg">Regístrate gratis</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Haptics.selectionAsync()
            console.log("Google login")
          }}
          className="bg-transparent border-2 border-white rounded-full py-4 flex-row items-center justify-center gap-2"
          activeOpacity={0.8}
        >
          <Text className="text-white font-semibold text-base">Continuar con Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Haptics.selectionAsync()
            console.log("Facebook login")
          }}
          className="bg-[#1877F2] rounded-full py-4 flex-row items-center justify-center gap-2"
          activeOpacity={0.8}
        >
          <Text className="text-white font-semibold text-base">Continuar con Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Haptics.selectionAsync()
            console.log("Apple login")
          }}
          className="bg-white rounded-full py-4 flex-row items-center justify-center gap-2"
          activeOpacity={0.8}
        >
          <Text className="text-black font-semibold text-base">Continuar con Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Haptics.selectionAsync()
            router.push("/(auth)/SignIn")
          }}
          className="mt-6"
          activeOpacity={0.7}
        >
          <Text className="text-white font-bold text-base text-center">Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
      <View className="pb-10 px-8">
        <Text className="text-gray-500 text-xs text-center">
          Al continuar, aceptas los{' '}
          <Text className="underline">Términos y condiciones</Text>
          {' '}y la{' '}
          <Text className="underline">Política de privacidad</Text>
          {' '}de Spotify.
        </Text>
      </View>
    </View>
  )
}


export default index