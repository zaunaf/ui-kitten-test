import React from "react";
import { Platform, StyleSheet } from "react-native";
import { Layout, Text } from "react-native-ui-kitten";
import Colors from '../constants/Colors';
import IconBadge from 'react-native-icon-badge';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { ArticleList1Container } from '@src/containers/layouts/articles';

const UpdatesScreen = props => {
  return (
    <Layout style={styles.screen}>
      <ArticleList1Container {...props} />
    </Layout>
  );
};

UpdatesScreen.navigationOptions = {
  headerTitle: 'Updates',
  headerStyle: {
    backgroundColor: ( Platform.OS === 'ios') ? 'white' : Colors.primaryColor
  },
  headerTintColor: ( Platform.OS === 'ios') ? Colors.primaryColor : 'white',
  tabBarOptions: {
    showLabel: false
  },
  tabBarIcon: ({tintColor}) => {
    return (
      <IconBadge
        MainElement={<FontAwesome name='newspaper-o' size={25} color={tintColor} />}
        BadgeElement={<Text style={{ color: 'white' }}>{3}</Text>}
        IconBadgeStyle={{top: -8, right: -8, width:20, height:20, backgroundColor: '#FF0000'}}
        Hidden={false}
      />
    );
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default UpdatesScreen;