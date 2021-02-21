import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

import { API } from '../helpers/api';

const Home = ({ navigation }) => {
  const [aphorisms, setAphorisms] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await API('GET', 'admin/aphorisms');
        setAphorisms(res.data.data);
      } catch (err) {
        console.log(err);
      }
    })();
    // setLoader(true);
    console.log('work');
  }, []);

  return (
    <>
      <View style={styles.body}>
        {/* TODO: to make a component */}
        <View style={styles.goAphorismScreen}>
          <Button
            title="Go to SingleAphorisms Screen"
            onPress={() => navigation.navigate('SingleAphorisms')}
          />
        </View>
        <FlatList
          data={aphorisms}
          renderItem={({ item }) => (
            <View style={styles.aphorismItem}>
              <Text style={styles.authorName}>{item.authorName}</Text>
            </View>
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  authorName: {
    fontSize: 20,
  },
  aphorismItem: {
    borderBottomColor: 'silver',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  goAphorismScreen: {
    position: 'absolute',
    bottom: 0,
    zIndex: 10
  },
});

export default Home;
