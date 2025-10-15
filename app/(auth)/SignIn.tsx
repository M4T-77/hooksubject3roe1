import { View, Image, ScrollView, TouchableOpacity, TextInput, Text } from 'react-native'
import React, { useState } from 'react'
import * as Haptics from 'expo-haptics'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSignIn = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
    console.log("Sign In", { email, password })
    router.replace('/(main)/DashboardScreen')
  }

  return (
    <ScrollView className="flex-1 bg-primary">
      <TouchableOpacity onPress={() => router.back()} className="absolute top-16 left-4 z-10">
        <Ionicons name="arrow-back" size={24} color="#F2E3D5" />
      </TouchableOpacity>

      <View className="items-center gap-6 px-6 pt-16">
        <Image
          source={{ uri: "https://logodownload.org/wp-content/uploads/2016/09/spotify-logo-branca-white.png" }}
          className="w-32 h-20 mt-8"
          resizeMode="contain"
        />
        
        <Text className="text-secondary text-3xl font-bold">Inicia sesión en tu cuenta</Text>
      </View>

      <View className='w-full px-6 gap-4 mt-10'>
        <View>
          <Text className="text-secondary text-sm font-semibold mb-2">Correo electrónico</Text>
          <TextInput 
            value={email}
            onChangeText={setEmail}
            placeholder="Ingresa tu correo electrónico"
            placeholderTextColor="#B2BEB5"
            className="bg-primary text-secondary border border-secondary rounded-md px-4 py-3"
          />
        </View>
        <View>
          <Text className="text-secondary text-sm font-semibold mb-2">Contraseña</Text>
          <TextInput 
            value={password}
            onChangeText={setPassword}
            placeholder="Ingresa tu contraseña"
            placeholderTextColor="#B2BEB5"
            secureTextEntry
            className="bg-primary text-secondary border border-secondary rounded-md px-4 py-3"
          />
        </View>
        <TouchableOpacity
          onPress={handleSignIn}
          className="bg-accent rounded-full py-4 mt-6"
          activeOpacity={0.8}
        >
          <Text className="text-center text-primary font-bold text-lg">Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Haptics.selectionAsync()
            console.log("Forgot password")
          }}
          activeOpacity={0.7}
          className="items-center mt-4"
        >
          <Text className="text-secondary underline text-sm">¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <View className="flex-row items-center my-8">
          <View className="flex-1 h-[1px] bg-secondary" />
          <Text className="mx-4 text-secondary">o</Text>
          <View className="flex-1 h-[1px] bg-secondary" />
        </View>
        <TouchableOpacity
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
            router.push("/+not-found")
          }}
          className="bg-google-blue rounded-full py-3 flex-row items-center justify-center"
          activeOpacity={0.8}
        >
          <Text className="text-white font-semibold">Continuar con Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
            router.push("/+not-found")
          }}
          className="bg-facebook-blue rounded-full py-3 flex-row items-center justify-center"
          activeOpacity={0.8}
        >
          <Text className="text-white font-semibold">Continuar con Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
            router.push("/+not-found")
          }}
          className="bg-apple-black rounded-full py-3 flex-row items-center justify-center mb-8"
          activeOpacity={0.8}
        >
          <Text className="text-white font-semibold">Continuar con Apple</Text>
        </TouchableOpacity>
        <View className="flex-row justify-center items-center gap-2 pb-20">
          <Text className="text-secondary">¿No tienes una cuenta?</Text>
          <TouchableOpacity
            onPress={() => {
              Haptics.selectionAsync()
              router.push('/(auth)/SignUp')
            }}
            activeOpacity={0.7}
          >
            <Text className="text-accent underline font-semibold">Regístrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default SignIn
