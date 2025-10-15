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
        <Ionicons name="arrow-back" size={24} color="#f7fafc" />
      </TouchableOpacity>

      <View className="items-center gap-6 px-6 pt-16">
        <Image
          source={{ uri: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" }}
          className="w-32 h-32 mt-8"
          resizeMode="contain"
        />
        
        <Text className="text-secondary text-3xl font-bold">Login to Your Account</Text>
      </View>

      <View className='w-full px-6 gap-4 mt-10'>
        <View>
          <Text className="text-secondary text-sm font-semibold mb-2">Email</Text>
          <TextInput 
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor="#a0aec0"
            className="bg-primary text-secondary border border-secondary rounded-md px-4 py-3"
          />
        </View>
        <View>
          <Text className="text-secondary text-sm font-semibold mb-2">Password</Text>
          <TextInput 
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            placeholderTextColor="#a0aec0"
            secureTextEntry
            className="bg-primary text-secondary border border-secondary rounded-md px-4 py-3"
          />
        </View>
        <TouchableOpacity
          onPress={handleSignIn}
          className="bg-accent rounded-full py-4 mt-6"
          activeOpacity={0.8}
        >
          <Text className="text-center text-primary font-bold text-lg">Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Haptics.selectionAsync()
            console.log("Forgot password")
          }}
          activeOpacity={0.7}
          className="items-center mt-4"
        >
          <Text className="text-secondary underline text-sm">Forgot Password?</Text>
        </TouchableOpacity>
        <View className="flex-row items-center my-8">
          <View className="flex-1 h-[1px] bg-secondary" />
          <Text className="mx-4 text-secondary">or</Text>
          <View className="flex-1 h-[1px] bg-secondary" />
        </View>
        <TouchableOpacity
          onPress={() => {
            Haptics.selectionAsync()
            console.log("Google login")
          }}
          className="bg-transparent border-2 border-secondary rounded-full py-3 flex-row items-center justify-center"
          activeOpacity={0.8}
        >
          <Text className="text-secondary font-semibold">Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Haptics.selectionAsync()
            console.log("Facebook login")
          }}
          className="bg-transparent border-2 border-secondary rounded-full py-3 flex-row items-center justify-center"
          activeOpacity={0.8}
        >
          <Text className="text-secondary font-semibold">Continue with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Haptics.selectionAsync()
            console.log("Apple login")
          }}
          className="bg-transparent border-2 border-secondary rounded-full py-3 flex-row items-center justify-center mb-8"
          activeOpacity={0.8}
        >
          <Text className="text-secondary font-semibold">Continue with Apple</Text>
        </TouchableOpacity>
        <View className="flex-row justify-center items-center gap-2 pb-20">
          <Text className="text-secondary">Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              Haptics.selectionAsync()
              router.push('/(auth)/SignUp')
            }}
            activeOpacity={0.7}
          >
            <Text className="text-accent underline font-semibold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default SignIn
