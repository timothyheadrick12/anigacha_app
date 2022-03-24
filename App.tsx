import {
  FlatList,
  ImageBackground,
  Text,
  View,
  StatusBar,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import getCharacters from './requests/getCharacters';
import {character} from './types';
import {styles} from './styles';
import {LinearGradient} from 'expo-linear-gradient';

const DATA: character[] = [];
const updateData = async () =>
  getCharacters().then((characters: character[]) => {
    DATA.push(...characters);
  });

updateData();

const Item = ({name, image}: {name: string; image: string}) => (
  <View style={styles.item}>
    <ImageBackground
      source={{uri: image}}
      style={styles.backgroundImage}
      resizeMode={'cover'}
    >
      <LinearGradient
        colors={['#222F', 'transparent']}
        end={{x: 0, y: 0.15}}
        start={{x: 0, y: 1}}
        style={styles.nameView}
      >
        <Text style={styles.name}>{name}</Text>
      </LinearGradient>
    </ImageBackground>
  </View>
);

export default function App() {
  const [isFetching, setIsFetching] = useState(false);
  var flatListRef: FlatList<character>;

  const fetchData = () => {
    updateData().then(() => setIsFetching(false));
  };

  const onRefresh = () => {
    setIsFetching(true);
    DATA.splice(0, DATA.length);
    fetchData();
  };

  const jumpToTop = () => {
    flatListRef.scrollToIndex({index: 0});
  };

  const renderItem = ({item}: {item: character}) => (
    <Item name={item.name} image={item.image_large} />
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <FlatList
        data={DATA}
        ref={(ref) => (flatListRef = ref!)}
        renderItem={renderItem}
        onEndReached={() => updateData()}
        onRefresh={onRefresh}
        refreshing={isFetching}
        keyExtractor={(item) => item.id + Math.random().toString()}
      />
      <Pressable onPress={jumpToTop} style={styles.button}>
        <Text style={styles.name}>^</Text>
      </Pressable>
    </View>
  );
}
