import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { VFC } from 'react';
import HomeScreen from '../screens/home';

const Stack = createNativeStackNavigator<any>();
const Tabs = createBottomTabNavigator();

export const RootNavigation: VFC = () => {
	return (
		<>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Root"
						component={BottomTabs}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
};

const BottomTabs: VFC = () => {
	return (
		<Tabs.Navigator initialRouteName="Home">
			<Tabs.Screen name="Home" component={HomeScreen} />
		</Tabs.Navigator>
	);
};
