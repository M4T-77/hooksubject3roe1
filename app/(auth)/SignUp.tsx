import { View, Image, ScrollView, TouchableOpacity, TextInput, Text } from 'react-native'
import React, { useState } from 'react'
import * as Haptics from 'expo-haptics'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [username, setUsername] = useState("")
  const router = useRouter()

  const handleSignUp = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
    console.log("Sign Up", { email, password, confirmPassword, username })
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
          className="w-24 h-16 mt-8"
          resizeMode="contain"
        />
        
        <Text className="text-secondary text-3xl font-bold">Regístrate gratis</Text>
      </View>

      <View className='w-full px-6 gap-4 mt-10'>
        <View>
          <Text className="text-secondary text-sm font-semibold mb-2">¿Cuál es tu correo electrónico?</Text>
          <TextInput 
            value={email}
            onChangeText={setEmail}
            placeholder="Ingresa tu correo electrónico"
            placeholderTextColor="#B2BEB5"
            keyboardType="email-address"
            autoCapitalize="none"
            className="bg-primary text-secondary border border-secondary rounded-md px-4 py-3"
          />
        </View>

        <View>
          <Text className="text-secondary text-sm font-semibold mb-2">Crea un nombre de usuario</Text>
          <TextInput 
            value={username}
            onChangeText={setUsername}
            placeholder="Ingresa un nombre de usuario"
            placeholderTextColor="#B2BEB5"
            autoCapitalize="none"
            className="bg-primary text-secondary border border-secondary rounded-md px-4 py-3"
          />
        </View>

        <View>
          <Text className="text-secondary text-sm font-semibold mb-2">Crea una contraseña</Text>
          <TextInput 
            value={password}
            onChangeText={setPassword}
            placeholder="Crea una contraseña"
            placeholderTextColor="#B2BEB5"
            secureTextEntry
            className="bg-primary text-secondary border border-secondary rounded-md px-4 py-3"
          />
        </View>

        <View>
          <Text className="text-secondary text-sm font-semibold mb-2">Confirma tu contraseña</Text>
          <TextInput 
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirma tu contraseña"
            placeholderTextColor="#B2BEB5"
            secureTextEntry
            className="bg-primary text-secondary border border-secondary rounded-md px-4 py-3"
          />
        </View>

        <View className="mt-4">
          <Text className="text-secondary text-xs text-center">
            Al hacer clic en "Regístrate", aceptas los{' '}
            <Text className="text-accent underline">Términos y condiciones de uso</Text>
            {' '}de Spotify.
          </Text>
          <Text className="text-secondary text-xs text-center mt-2">
            Para obtener más información sobre cómo Spotify recopila, utiliza, comparte y protege tus datos personales, consulta la{' '}
            <Text className="text-accent underline">Política de privacidad</Text>
            {' '}de Spotify.
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleSignUp}
          className="bg-accent rounded-full py-4 mt-6"
          activeOpacity={0.8}
        >
          <Text className="text-center text-primary font-bold text-lg">Registrarte</Text>
        </TouchableOpacity>

        <View className="flex-row items-center my-8">
          <View className="flex-1 h-[1px] bg-secondary" />
          <Text className="mx-4 text-secondary">o</Text>
          <View className="flex-1 h-[1px] bg-secondary" />
        </View>

        <TouchableOpacity
          onPress={() => {
            Haptics.selectionAsync()
            console.log("Google sign up")
          }}
          className="bg-google-blue rounded-full py-3 flex-row items-center justify-center"
          activeOpacity={0.8}
        >
          <Text className="text-white font-semibold">Registrarte con Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Haptics.selectionAsync()
            console.log("Facebook sign up")
          }}
          className="bg-facebook-blue rounded-full py-3 flex-row items-center justify-center"
          activeOpacity={0.8}
        >
          <Text className="text-white font-semibold">Registrarte con Facebook</Text>
        </TouchableOpacity>

        <View className="flex-row justify-center items-center gap-2 pb-20 mt-8">
          <Text className="text-secondary">¿Ya tienes cuenta?</Text>
          <TouchableOpacity
            onPress={() => {
              Haptics.selectionAsync()
              router.push('/(auth)/SignIn')
            }}
            activeOpacity={0.7}
          >
            <Text className="text-accent underline font-semibold">Inicia sesión aquí</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default SignUp
