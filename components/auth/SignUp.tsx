import { View, Image } from 'react-native'
import React , { useState }from 'react'
import CustomText from '../ui/CustomText'
import CustomTextField from '../ui/CustomTextField'
import IconButton from '../ui/IconButton'

const LogOut = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rpassword, setRpassword] = useState("")

  return (
    <View>
      <View className="items-center gap-3">
        <Image
          source={{uri:"https://pngimg.com/d/welcome_PNG81.png"}}
          className="w-60 h-60 bg-[#A69580] rounded-3xl"         
          resizeMode='contain'
        />
        <CustomText variant='title' value='Sign Up'/>
      </View>
      <View className='w-screen px-5 gap-5 mt-5'>
        <CustomText variant='title' value='E-Mail:'/>
        <CustomTextField title='' variant='normal' value={email} onChange={setEmail}/>
        <CustomText variant='title' value='Contraseña:'/>
        <CustomTextField title='' variant='normal' value={password} onChange={setPassword}/>
        <CustomText variant='title' value='Repita su contraseña:'/>
        <CustomTextField title='' variant='normal' value={rpassword} onChange={setRpassword}/>
        <View className='flex-row justify-center gap-3 mb-20'>
          <IconButton title="Regresar" iconName='arrow-back-outline' color='white' size={20}/>
          <IconButton title="Sign Up" iconName='arrow-forward-outline' color='white' size={20}/>
        </View>
      </View>
    </View>
  )
}

export default LogOut