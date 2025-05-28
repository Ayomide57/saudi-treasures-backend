import { RelativePathString, useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

interface IRouteTextButton {
  name: string;
  route: RelativePathString;
  className?: string;
    textClassName?: string;
}

const RouteTextButton = ({ name, route, textClassName, className }: IRouteTextButton) => {
  const router = useRouter();

  return (
    <TouchableOpacity className={className} onPress={() => router.navigate(route)}>
      <Text className={textClassName}>{name}</Text>
    </TouchableOpacity>
  );
};

export default RouteTextButton;
