import { ImageBackground, View } from "react-native";
import "../global.css";
import LogIn from "@/components/auth/SignIn";
import IconButton from "@/components/ui/IconButton";

export default function Index() {
  return (
    <ImageBackground
      source={require("../assets/images/logIn.png")}
      resizeMode="cover"
      className="flex-1 items-center pt-20 gap-4 w-full h-screen"
    >
   </ImageBackground>
  );
}
