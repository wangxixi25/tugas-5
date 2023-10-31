import React from "react";
import { NativeBaseProvider, Box } from "native-base";

// Functional Component with props
const Separator = (props) => {
  return (
    <NativeBaseProvider>
      <Box h={props.height} />
    </NativeBaseProvider>
  );
};

export default Separator;