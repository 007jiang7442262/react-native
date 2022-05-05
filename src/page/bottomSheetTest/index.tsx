import * as React from 'react';
import { useState } from 'react';
import { BottomSheet, Button, ListItem } from '@rneui/themed';
import { StyleSheet, Image, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type BottomSheetComponentProps = {};

const BottomSheetComponent: React.FunctionComponent<BottomSheetComponentProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    { title: 'List Item 1' },
    { title: 'List Item 2' },
    {
      title: 'Cancel',
      containerStyle: { backgroundColor: 'red' },
      titleStyle: { color: 'white' },
      onPress: () => setIsVisible(false),
    },
  ];

  return (
    <SafeAreaView>
        <Image source={require('../../assetc/gou.gif')} style={{ width: '80%' }} />


        <Button
          title="Open Bottom Sheet"
          onPress={() => setIsVisible(true)}
          buttonStyle={styles.button}
        />

        <BottomSheet modalProps={{}} isVisible={isVisible} backdropStyle={{ backgroundColor: 'red' }}>
          {list.map((l, i) => (
            <ListItem
              key={i}
              containerStyle={l.containerStyle}
              onPress={l.onPress}
            >
              <ListItem.Content>
                <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
});

export default BottomSheetComponent;