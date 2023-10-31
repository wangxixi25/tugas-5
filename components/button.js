import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Box, Text as NBText, NativeBaseProvider } from "native-base";

// Functional Component with props
const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Box
        bg="#dddddd"
        p={4}
        alignItems="center"
        borderRadius={30}
      >
        <NBText
          fontSize={16}
          textTransform="uppercase"
          fontWeight="bold"
        >
          {props.text}
        </NBText>
      </Box>
    </TouchableOpacity>
  );
};

export default Button;
