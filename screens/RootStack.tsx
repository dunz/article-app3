import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainTab} from './MainTab';
import {ArticleScreen} from './ArticleScreen';

const Stack = createNativeStackNavigator();

export const RootStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="MainTab" component={MainTab} options={{headerShown: false}} />
    <Stack.Screen name="Article" component={ArticleScreen} />
  </Stack.Navigator>
);
