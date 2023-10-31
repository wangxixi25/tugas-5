import React from "react";
import { NativeBaseProvider, Box, HStack, Image, IconButton } from "native-base";

// Functional Component with props
const Header = (props) => {
  return (
    <NativeBaseProvider>
      <Box bg="#AA0002" flexDirection="row" justifyContent="space-between" p={4}>
        <IconButton
          onPress={() => props.drawer.current.openDrawer()}
          icon={
            <Image
              source={require("../assets/menu.png")}
              alt="Menu Icon"
              w={18}
              h={18}
            />
          }
        />
        <HStack space={2} alignItems="center">
          <IconButton
            icon={
              <Image
                source={require("../assets/facebook.png")}
                alt="Facebook Icon"
                w={36}
                h={16}
                resizeMode="contain"
              />
            }
          />
          <IconButton
            icon={
              <Image
                source={require("../assets/youtube.png")}
                alt="YouTube Icon"
                w={36}
                h={16}
                resizeMode="contain"
              />
            }
          />
          <IconButton
            icon={
              <Image
                source={require("../assets/twitter.png")}
                alt="Twitter Icon"
                w={36}
                h={16}
                resizeMode="contain"
              />
            }
          />
          <IconButton
            icon={
              <Image
                source={require("../assets/search.png")}
                alt="Search Icon"
                w={36}
                h={16}
                resizeMode="contain"
              />
            }
          />
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default Header;
