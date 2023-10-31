import React, { useState } from "react";
import { NativeBaseProvider, Box, Center, FlatList, Image, Modal, Text, VStack, Pressable, Heading } from "native-base";

// Dummmy Data (Array of Object)
const datas = [
  {
    id: 1,
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
  },
  {
    id: 2,
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
  },
  {
    id: 3,
    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
  },
  {
    id: 4,
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
  },
  {
    id: 5,
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
  },
  {
    id: 6,
    title:
      "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
  },
  {
    id: 7,
    title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
  },
  {
    id: 8,
    title:
      "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
  },
  {
    id: 9,
    title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
  },
  {
    id: 10,
    title:
      "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
    image:
      "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
  },
];

// Functional Component
const List = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => {
          setSelectedItem(item);
          setModalVisible(true);
        }}
      >
        <Box
          p={4}
          borderBottomWidth={1}
          borderBottomColor="#dddddd"
          alignItems="center"
        >
          <Image
            source={{ uri: item.image }}
            alt="News Image"
            h={200}
            w="100%"
            resizeMode="contain"
          />
          <Text fontSize={18} pt={2}>
            {item.title}
          </Text>
        </Box>
      </Pressable>
    );
  };

  return (
    <NativeBaseProvider>
      <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        size="lg"
      >
        <Modal.Content>
          <Modal.CloseButton />
          {selectedItem && (
            <Modal.Body>
              <Image
                source={{ uri: selectedItem.image }}
                alt="News Image"
                h={200}
                w="100%"
                resizeMode="contain"
              />
              <Text fontWeight="bold" fontSize={24} mt={2}>
                {selectedItem.title}
              </Text>
            </Modal.Body>
          )}
          <Modal.Footer>
            <Center>
              <Pressable
                onPress={() => setModalVisible(false)}
                bg="white"
                borderWidth={1}
                borderColor="red.600"
                borderRadius="8"
                px={4}
                py={2}
              >
                <Text color="red.600" fontWeight="bold">
                  Close
                </Text>
              </Pressable>
            </Center>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </NativeBaseProvider>
  );
};

export default List;
