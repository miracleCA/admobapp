import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../Home';
import Blogs from '../Blogs';
import Images from '../Images';
import Videos from '../Videos';

const homeName = "Home";
const blogName = "Blogs";
const imageName = "Images";
const videoName = "Videos";

const bottomTab = createBottomTabNavigator();

export default function Main() {
    return (
        <NavigationContainer>
            <bottomTab.Navigator
                initialRouteName = {homeName}
                screenOptions = {({route}) => ({
                    tabBarStyle:{
                        height: 50,
                      },
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn =route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline'
                        }
                        else if (rn === blogName) {
                            iconName = focused ? 'clipboard' : 'clipboard-outline'
                        }
                        else if (rn === imageName) {
                            iconName = focused ? 'images' : 'images-outline'
                        }
                        else if (rn === videoName) {
                            iconName = focused ? 'videocam' : 'videocam-outline'
                        }
                        return <Ionicons name={iconName} size={size} color={color}/>
                    }
                })}
            >

                <bottomTab.Screen name={homeName} component={Home}/>
                <bottomTab.Screen name={blogName} component={Blogs}/>
                <bottomTab.Screen name={videoName} component={Videos}/>
                <bottomTab.Screen name={imageName} component={Images}/>

            </bottomTab.Navigator>
        </NavigationContainer>

    );
}