import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ArticlesScreen} from './ArticlesScreen';
import {UserMenuScreen} from './UserMenuScreen';

const Tab = createBottomTabNavigator();

export const MainTab = () => (
  <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
    <Tab.Screen
      name="Articles"
      component={ArticlesScreen}
      options={{title: '게시글 목록', tabBarIcon: ({color, size}) => <MaterialIcons name="article" color={color} size={size} />}}
    />
    <Tab.Screen
      name="UserMenu"
      component={UserMenuScreen}
      options={{title: '게시글 목록', tabBarIcon: ({color, size}) => <MaterialIcons name="person" color={color} size={size} />}}
    />
  </Tab.Navigator>
);
