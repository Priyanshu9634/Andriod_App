import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Page from "./src/screen/Page"
import Contact from "./src/screen/Contact";
import Course from "./src/screen/Course"
import About from "./src/screen/About";
import UserData from "./src/screen/UserData";
import SemesterDetails from "./src/screen/SemesterDetails";

export default function App() {
   const stack = createNativeStackNavigator();

   return (
   <NavigationContainer>
      <stack.Navigator initialRouteName="Home Page">
        
         <stack.Screen name="Home Page"
            options={{
               headerShown: false,
            }}>
            {(props) => {
                  return <Page {...props} channelName={'To the Home Page of GEHU'} />;
               }}
         </stack.Screen>

         {/* Course Screen */}
         <stack.Screen name="Course" component={Course}
         options={{
            headerTitleStyle: {
               fontSize: 25,
            },
            headerTitle: "Semesters",
            headerTitleAlign: "center",
         }} 
         />
         {/* Contact Screen */}
         <stack.Screen name="Contact" component={Contact}
         options={{
            headerTitleStyle: {
               fontSize: 25,
            },
            headerTitleAlign: "center",
         }} 
         />
         {/* About Screen */}
         <stack.Screen name="About" component={About}
         options={{
            headerTitleStyle: {
               fontSize: 25,
            },
            headerTitleAlign: "center",
         }} 
         />
          {/* UserData Screen */}
         <stack.Screen name="UserData" component={UserData}
         options={{
            headerTitleStyle: {
               fontSize: 25,
            },
            headerTitle: "Student's Data",
            headerTitleAlign: "center",
         }} />
         {/* SemesterDetails Screen */}
         <stack.Screen name="SemesterDetails" component={SemesterDetails} 
         options={{
            headerTitleStyle: {
               fontSize: 25,
            },
            headerTitleAlign: "center",
         }}
         />
                 
      </stack.Navigator>
      </NavigationContainer>
      );
}