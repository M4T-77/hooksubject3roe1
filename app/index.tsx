import { ImageBackground, View } from "react-native";
import "../global.css";
import SignIn from "@/components/auth/SignIn";
import IconButton from "@/components/ui/IconButton";
import SignUp from "@/components/auth/SignUp";

export default function Index() {
  return (
    <ImageBackground
      source={require("../assets/images/logIn.png")}
      resizeMode="cover"
      className="flex-1 items-center pt-20 gap-4 w-screen h-screen"
    >
      <SignIn></SignIn>
   </ImageBackground>
  );
}
