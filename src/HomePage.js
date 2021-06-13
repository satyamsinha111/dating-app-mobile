import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import {IconButton, Colors, Button, Card} from 'react-native-paper';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.appBar}>
          <IconButton
            icon="chevron-left"
            color={Colors.grey1000}
            size={50}
            onPress={() => console.log('Pressed')}
          />
          <Text style={styles.user}>Jenny Wilson</Text>
          <IconButton
            icon="dots-horizontal"
            color={Colors.grey1000}
            size={50}
            onPress={() => console.log('Pressed')}
          />
        </View>
        <View style={styles.profileSection}>
          <Image
            style={styles.tinyLogo}
            source={require('./assets/profile.jpeg')}
          />
          <Text style={styles.username}>@Wilson_je</Text>
        </View>
        <View style={styles.status}>
          <View style={styles.status__section}>
            <Text style={styles.numbers}>29</Text>
            <Text style={styles.numbers_text}>Following</Text>
          </View>
          <View style={styles.status__section}>
            <Text style={styles.numbers}>121.2k</Text>
            <Text style={styles.numbers_text}>Follower</Text>
          </View>
          <View style={styles.status__section}>
            <Text style={styles.numbers}>20M</Text>
            <Text style={styles.numbers_text}>Likes</Text>
          </View>
        </View>
        <View style={styles.action_buttons}>
          <Button
            icon="plus-circle"
            mode="contained"
            style={styles.follow}
            uppercase={false}
            // eslint-disable-next-line react-native/no-inline-styles
            labelStyle={{
              fontSize: 15,
              fontWeight: 'normal',
            }}
            onPress={() => console.log('Pressed')}>
            Follow Me
          </Button>
          <IconButton
            icon="inbox"
            size={30}
            color={Colors.grey600}
            style={styles.inbox}
          />
        </View>
        <View style={styles.content_type}>
          <View style={styles.type_container}>
            <Text style={styles.type}>Photos</Text>
          </View>
          <View style={styles.type_container}>
            <Text style={styles.type}>Videos</Text>
          </View>
          <View style={styles.type_container}>
            <Text style={styles.type}>Tagged</Text>
          </View>
        </View>
        <View style={styles.posts}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <Card style={styles.cards}>
              <Card.Cover source={require('./assets/models.jpeg')} />
            </Card>
            <Card style={styles.cards}>
              <Card.Cover source={require('./assets/models1.jpg')} />
            </Card>
            <Card style={styles.cards}>
              <Card.Cover source={require('./assets/models2.jpg')} />
            </Card>
            <Card style={styles.cards}>
              <Card.Cover source={require('./assets/models3.jpg')} />
            </Card>
            <Card style={styles.cards}>
              <Card.Cover source={require('./assets/models4.jpg')} />
            </Card>
            <Card style={styles.cards}>
              <Card.Cover source={require('./assets/models5.jpg')} />
            </Card>
            <Card style={styles.cards}>
              <Card.Cover source={require('./assets/models6.jpg')} />
            </Card>
            <Card style={styles.cards}>
              <Card.Cover source={require('./assets/models7.jpeg')} />
            </Card>
            <Card style={styles.cards}>
              <Card.Cover source={require('./assets/models8.jpg')} />
            </Card>
            <Card style={styles.cards}>
              <Card.Cover source={require('./assets/models9.jpg')} />
            </Card>
            <Card style={styles.cards}>
              <Card.Cover source={require('./assets/models10.jpeg')} />
            </Card>
            <Card style={styles.cards}>
              <Card.Cover source={require('./assets/models11.jpg')} />
            </Card>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Nunito',
  },
  appBar: {
    borderColor: '#fff',
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  user: {
    fontWeight: '700',
    fontSize: 25,
    marginTop: 25,
    marginRight: 7,
    fontFamily: 'roboto',
  },
  profileSection: {
    flex: 0.2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    marginRight: 10,
    borderRadius: 1000,
    width: 200,
    height: 200,
  },
  username: {
    fontWeight: '700',
    fontSize: 30,
    marginTop: 10,
    marginBottom: 20,
  },
  status: {
    flex: 0.1,

    flexDirection: 'row',
  },
  status__section: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numbers: {
    fontWeight: '700',
    marginBottom: 4,
    fontSize: 20,
  },
  numbers_text: {
    fontWeight: 'normal',

    fontSize: 17,
  },
  action_buttons: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  follow: {
    backgroundColor: '#4aa96c',
    borderRadius: 10,
  },
  inbox: {
    borderRadius: 2000,
    backgroundColor: '#e1e5ea',
    marginLeft: 20,
    textAlign: 'center',
  },
  content_type: {
    flex: 0.1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 3,
  },
  type: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    letterSpacing: 1,
  },
  type_container: {
    flex: 1,
  },
  posts: {
    flex: 0.2,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cards: {
    width: '33.33%',
    padding: 5,
  },
});
