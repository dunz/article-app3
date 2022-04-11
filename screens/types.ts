import {CompositeNavigationProp, NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

/* MainTab */
export type MainTabParamList = {
  Articles: undefined;
  UserMenu: undefined;
};

export type MainTabNavigationScreenParams = NavigatorScreenParams<MainTabParamList>;
export type MainTabNavigationProp = CompositeNavigationProp<RootStackNavigationProp, BottomTabNavigationProp<MainTabParamList>>;
export type MainTabRouteProp = RouteProp<RootStackParamList, 'MainTab'>;
export type ArticleScreenRouteProp = RouteProp<RootStackParamList, 'Article'>;
export type WriteScreenRouteProp = RouteProp<RootStackParamList, 'Write'>;

/* RootStack */
export type RootStackParamList = {
  MainTab: MainTabNavigationScreenParams;
  Article: {
    id: number;
  };
  Register: undefined;
  Login: undefined;
  MyArticles: undefined;
  Write: {
    articleId?: number;
  };
};
export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;
