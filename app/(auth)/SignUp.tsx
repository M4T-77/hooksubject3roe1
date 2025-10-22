import { View, Image, ScrollView, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpSchema } from '../../lib/validation'
import CustomTextField from '../../components/ui/CustomTextField'
import EmailInput from '../../lib/components/EmailInput'

const SignUp = () => {
  const router = useRouter()
  const { control, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    }
  });

  // This function is called when the user submits the form
  const onSubmit = (data: z.infer<typeof SignUpSchema>) => {
    // The data is valid, so we can log it and navigate to the dashboard
    console.log("Sign Up", data)
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
        <EmailInput
          name="email"
          label="¿Cuál es tu correo electrónico?"
          placeholder="Ingresa tu correo electrónico"
          onValueChange={(value, isValid) => {
            setValue("email", value, { shouldValidate: true });
          }}
        />

        <Controller
          control={control}
          name="username"
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomTextField
              title="Crea un nombre de usuario"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Ingresa un nombre de usuario"
              autoCapitalize="none"
              error={errors.username?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomTextField
              title="Crea una contraseña"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Crea una contraseña"
              secureTextEntry
              error={errors.password?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomTextField
              title="Confirma tu contraseña"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Confirma tu contraseña"
              secureTextEntry
              error={errors.confirmPassword?.message}
            />
          )}
        />

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
          onPress={handleSubmit(onSubmit)}
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
            console.log("Google sign up")
          }}
          className="bg-google-blue rounded-full py-3 flex-row items-center justify-center"
          activeOpacity={0.8}
        >
          <Text className="text-white font-semibold">Registrarte con Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
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
