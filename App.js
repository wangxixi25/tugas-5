import React, { useRef, useState } from "react";
import { View, StatusBar } from "react-native";
import {
  Drawer,
  Button,
  Text,
  NativeBaseProvider,
  Box,
  Divider,
} from "native-base";
import Header from "./components/header";
import List from "./screens/list";
import Article from "./screens/article";

// Functional Component
const App = () => {
  // State Declaration
  const [page, setPage] = useState("list");
  // Ref Declaration
  const drawer = useRef(null);

  // Arrow Function inside Functional Component
  const changePage = (pageName) => {
    // Close Drawer
    drawer.current.close();
    // Change state value
    setPage(pageName);
  };

  // Arrow Function inside Functional Component
  const navigationView = (
    <Box p={4} bg="#222222" flex={1}>
      <Button
        full
        bg="dark"
        onPress={() => changePage("list")}
      >
        <Text>List</Text>
      </Button>
      <Divider my={4} />
      <Button
        full
        bg="dark"
        onPress={() => changePage("article")}
      >
        <Text>Article</Text>
      </Button>
      <Divider my={4} />
      <Button
        full
        bg="dark"
        onPress={() => drawer.current.close()}
      >
        <Text>Close</Text>
      </Button>
    </Box>
  );

  return (
    <NativeBaseProvider>
      <Drawer
        ref={drawer}
        content={navigationView}
        onClose={() => changePage("list")}
      >
        <StatusBar backgroundColor="#AA0002" barStyle="light-content" />
        <Header drawer={drawer} />
        <View>
          {page === "list" ? <List /> : page === "article" ? <Article /> : null}
        </View>
      </Drawer>
    </NativeBaseProvider>
  );
};

export default App;
