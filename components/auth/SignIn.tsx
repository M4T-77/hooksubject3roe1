import { View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomText from '../ui/CustomText'
import CustomTextField from '../ui/CustomTextField'
import IconButton from '../ui/IconButton'

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <ScrollView className="w-full">
      <View className="items-center gap-4 px-5 pt-20">
        <Image
          source={{ uri: "https://images.vexels.com/media/users/3/151109/isolated/preview/5ebb2e5acda3e5cf0e6378404e5be718-icono-de-doodle-de-candado-cerrado.png" }}
          className="w-48 h-48 bg-[#A69580] rounded-3xl mt-10"
          resizeMode="contain"
        />
        <CustomText variant='title' value='Sign In'/>
      </View>
      <View className='w-full px-5 gap-5 mt-5'>
        <CustomText variant='title' value='E-Mail:'/>
        <CustomTextField title='' variant='normal' value={email} onChange={setEmail}/>
        <CustomText variant='title' value='Contraseña:'/>
        <CustomTextField title='' variant='normal' value={password} onChange={setPassword}/>
        <View className='flex-row justify-center gap-3 mb-40'>
          <IconButton title="Regresar" iconName='arrow-back-outline' color='white' size={20}/>
          <IconButton title="Sign In" iconName='arrow-forward-outline' color='white' size={20}/>
        </View>
      </View>
    </ScrollView>
  )
}

export default SignIn
