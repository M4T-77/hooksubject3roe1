import { View, Image, ScrollView, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignInSchema } from '../../lib/validation'
import CustomTextField from '../../components/ui/CustomTextField'
import EmailInput from '../../lib/components/EmailInput'

const SignIn = () => {
  const router = useRouter()
  const { control, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  // This function is called when the user submits the form
  const onSubmit = (data: z.infer<typeof SignInSchema>) => {
    // The data is valid, so we can log it and navigate to the dashboard
    console.log("Sign In", data)
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
        <EmailInput
          name="email"
          label="Correo electrónico"
          placeholder="Ingresa tu correo electrónico"
          onValueChange={(value, isValid) => {
            setValue("email", value, { shouldValidate: true });
          }}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomTextField
              title="Contraseña"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Ingresa tu contraseña"
              secureTextEntry
              error={errors.password?.message}
            />
          )}
        />

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="bg-accent rounded-full py-4 mt-6"
          activeOpacity={0.8}
        >
          <Text className="text-center text-primary font-bold text-lg">Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
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
            router.push("/+not-found")
          }}
          className="bg-google-blue rounded-full py-3 flex-row items-center justify-center"
          activeOpacity={0.8}
        >
          <Text className="text-white font-semibold">Continuar con Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            router.push("/+not-found")
          }}
          className="bg-facebook-blue rounded-full py-3 flex-row items-center justify-center"
          activeOpacity={0.8}
        >
          <Text className="text-white font-semibold">Continuar con Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
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
