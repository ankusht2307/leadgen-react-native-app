import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Gradient from '../components/Gradient';
import ColorPalette from '../constants/Colors';

const Dashboard = () => {
  const { login, lead } = useSelector((state) => state);
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
              <Text style={styles.topInfo}>{login.user.data.name}</Text>
              <Text style={styles.info}>{login.user.data.email}</Text>
              <Text style={styles.info}>{login.user.data.role.toString()}</Text>
            </View>
          </View>
          <View style={styles.userInfo}>
            <Text>
              <Text style={styles.userInfoLabel}>Total Leads: </Text>
              {lead.lead.data.length ? lead.lead.data.length : 0}
            </Text>
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
    borderColor: ColorPalette.accent,
    overflow: 'hidden',
    marginVertical: 20,
  },
  profilePic: {
    width: '100%',
    height: '100%',
  },
  profileInfo: { width: '40%' },
  topInfo: {
    color: ColorPalette.black,
    marginTop: 5,
    fontSize: 25,
    fontWeight: 'bold',
  },
  info: {
    color: ColorPalette.black,
    marginTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
  userInfo: {
    padding: 10,
  },
  userInfoLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'open-sans-bold',
  },
});

export default Dashboard;
