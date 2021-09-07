import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import Gradient from '../components/Gradient';
import Colors from '../constants/Colors';

const Dashboard = () => {
  return (
    <View style={styles.screen}>
      <Gradient>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.screen}>
          <View style={{ ...styles.ProfileHeader }}>
            <View style={styles.profilePicContainer}>
              <Image
                style={styles.profilePic}
                source={require('../assets/success.png')}
                resizeMode="cover"
              />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.topInfo}>Jogn Doe </Text>
              <Text style={styles.info}>johndoe@gmail.com</Text>
              <Text style={styles.info}>Admin</Text>
            </View>
          </View>
          <View style={styles.ProfileHeader}>
            <View style={styles.profileInfo}>
              <Text style={styles.info}>Jogn Doe </Text>
              <Text style={styles.info}>johndoe@gmail.com</Text>
              <Text style={styles.info}>Admin</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.info}>Jogn Doe </Text>
              <Text style={styles.info}>johndoe@gmail.com</Text>
              <Text style={styles.info}>Admin</Text>
            </View>
          </View>
          <View style={styles.ProfileHeader}>
            <View style={styles.profileInfo}>
              <Text style={styles.info}>Jogn Doe </Text>
              <Text style={styles.info}>johndoe@gmail.com</Text>
              <Text style={styles.info}>Admin</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.info}>Jogn Doe </Text>
              <Text style={styles.info}>johndoe@gmail.com</Text>
              <Text style={styles.info}>Admin</Text>
            </View>
          </View>
          <View style={styles.ProfileHeader}>
            <View style={styles.profileInfo}>
              <Text style={styles.info}>Jogn Doe </Text>
              <Text style={styles.info}>johndoe@gmail.com</Text>
              <Text style={styles.info}>Admin</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.info}>Jogn Doe </Text>
              <Text style={styles.info}>johndoe@gmail.com</Text>
              <Text style={styles.info}>Admin</Text>
            </View>
          </View>
          <View style={styles.ProfileHeader}>
            <View style={styles.profileInfo}>
              <Text style={styles.info}>Jogn Doe </Text>
              <Text style={styles.info}>johndoe@gmail.com</Text>
              <Text style={styles.info}>Admin</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.info}>Jogn Doe </Text>
              <Text style={styles.info}>johndoe@gmail.com</Text>
              <Text style={styles.info}>Admin</Text>
            </View>
          </View>
          <View style={styles.ProfileHeader}>
            <View style={styles.profileInfo}>
              <Text style={styles.info}>Jogn Doe </Text>
              <Text style={styles.info}>johndoe@gmail.com</Text>
              <Text style={styles.info}>Admin</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.info}>Jogn Doe </Text>
              <Text style={styles.info}>johndoe@gmail.com</Text>
              <Text style={styles.info}>Admin</Text>
            </View>
          </View>
          <View style={styles.ProfileHeader}>
            <View style={styles.profileInfo}>
              <Text style={styles.info}>Jogn Doe </Text>
              <Text style={styles.info}>johndoe@gmail.com</Text>
              <Text style={styles.info}>Admin</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.info}>Jogn Doe </Text>
              <Text style={styles.info}>johndoe@gmail.com</Text>
              <Text style={styles.info}>Admin</Text>
            </View>
          </View>
          <View style={styles.ProfileHeader}>
            <View style={styles.profileInfo}>
              <Text style={styles.info}>Jogn Doe </Text>
              <Text style={styles.info}>johndoe@gmail.com</Text>
              <Text style={styles.info}>Admin</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.info}>Jogn Doe </Text>
              <Text style={styles.info}>johndoe@gmail.com</Text>
              <Text style={styles.info}>Admin</Text>
            </View>
          </View>
          <View style={styles.ProfileHeader}>
            <View style={styles.profileInfo}>
              <Text style={styles.info}>Jogn Doe </Text>
              <Text style={styles.info}>johndoe@gmail.com</Text>
              <Text style={styles.info}>Admin</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.info}>Jogn Doe </Text>
              <Text style={styles.info}>johndoe@gmail.com</Text>
              <Text style={styles.info}>Admin</Text>
            </View>
          </View>
          <View style={styles.ProfileHeader}>
            <View style={styles.profileInfo}>
              <Text style={styles.info}>Jogn Doe </Text>
              <Text style={styles.info}>johndoe@gmail.com</Text>
              <Text style={styles.info}>Admin</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.info}>Jogn Doe </Text>
              <Text style={styles.info}>johndoe@gmail.com</Text>
              <Text style={styles.info}>Admin</Text>
            </View>
          </View>
        </ScrollView>
      </Gradient>
    </View>
  );
};

export const screenOptions = {
  headerTitle: 'Dashboard',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  ProfileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
  },
  profilePicContainer: {
    width: '40%',
    height: 150,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.accent,
    overflow: 'hidden',
    marginVertical: 20,
  },
  profilePic: {
    width: '100%',
    height: '100%',
  },
  profileInfo: { width: '40%' },
  topInfo: {
    color: Colors.black,
    marginTop: 5,
    fontSize: 25,
    fontWeight: 'bold',
  },
  info: {
    color: Colors.black,
    marginTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Dashboard;
