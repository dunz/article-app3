import {CompositeNavigationProp, NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

/* MainTab */
export type MainTabParamList = {
  Articles: undefined;
};

export type MainTabNavigationScreenParams = NavigatorScreenParams<MainTabParamList>;
export type MainTabNavigationProp = CompositeNavigationProp<RootStackNavigationProp, BottomTabNavigationProp<MainTabParamList>>;
export type MainTabRouteProp = RouteProp<RootSTackParamList, 'MainTab'>;

/* RootStack */
export type RootSTackParamList = {
  MainTab: MainTabNavigationScreenParams;
};
export type RootStackNavigationProp = NativeStackNavigationProp<RootSTackParamList>;
