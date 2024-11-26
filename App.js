import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Amortization from './screens/Amortization';
import SimpleInterest from './screens/SimpleInterest';
import CompoundInterest from './screens/CompoundInterest';
import QuadraticEquation from './screens/QuadraticEquation';
import About from './screens/About';
import {Ionicons} from '@expo/vector-icons'

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();


const BottomTabOverview = () =>{
  return(
    <BottomTabs.Navigator 
       screenOptions={ ({navigation}) => ({
        headerStyle: {backgroundColor :'cornflowerblue' },
        headerTintColor: "white",
        tabBarStyle:{backgroundColor :'cornflowerblue' },
        tabBarActiveTintColor:'blue', 
        
        })}>
      <BottomTabs.Screen 
         name="Home" 
         component={Home}
         options={{
            title: "Bloomer's Financial Calculators",
            tabBarLabel: "Home",
            tabBarIcon: ({color, size}) => (
            <Ionicons name='home' size={size} color={color}  />
            )
          }}
         
         />

        <BottomTabs.Screen 
         name="About" 
         component={About}
         options={{
            title: "About",
            tabBarLabel: "About",
            tabBarIcon: ({color, size}) => (
            <Ionicons name='calculator' size={size} color={color}  />
            )
          }}
         
         />
      
    </BottomTabs.Navigator>)
}
export default function App() {
  return (
    <> 
      <StatusBar style="light" />
         <NavigationContainer>
            <Stack.Navigator
               screenOptions={{
               headerStyle: { backgroundColor: 'cornflowerblue'},
               headerTintColor: 'white'
               }}
            >
               <Stack.Screen 
                  name="BottomTabOverview" 
                  component={BottomTabOverview} 
                  options={{
                     headerShown: false
                  }}
                  />
               <Stack.Screen 
                  name="Amortization" 
                  component={Amortization}
                  options={{
                     title: 'Amortization',
                     presentation: 'modal'
                  }}
                  />
               <Stack.Screen 
                  name="SimpleInterest" 
                  component={SimpleInterest}
                  options={{
                     title: 'Simple Interest',
                     presentation: 'modal'
                  }}
                  />
               <Stack.Screen 
                  name="CompoundInterest" 
                  component={CompoundInterest}
                  options={{
                     title: 'Compound Interest',
                     presentation: 'modal'
                  }}
                  />
               <Stack.Screen 
                  name="QuadraticEquation" 
                  component={QuadraticEquation}
                  options={{
                     title: 'Quadratic Equation',
                     presentation: 'modal'
                  }}
                  />
            </Stack.Navigator> 
         </NavigationContainer>
      
    </>
  );
}


