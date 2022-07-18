import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image  } from "react-native";

const Menu = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.buttonStyle}
            onPress={() => navigation.navigate('Course')}>
            <Text>Course</Text>
           {/*<Image style={styles.iconImage}
              source={require("../assets/semdet.jpg")}
    />*/}
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}
            onPress={() => navigation.navigate('UserData')}>
            <Text>UserData</Text>
           {/* <Image style={styles.iconImage}
              source={require("../assets/data.jpg")}
/>*/}
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}
            onPress={() => navigation.navigate('About')}>
            <Text>About</Text>
            {/* <Image style={styles.iconImage}
              source={require("../assets/about.jpg")}
/>*/}
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle}
            onPress={() => navigation.navigate('Contact')}>
            <Text>Contact</Text>
            {/* <Image style={styles.iconImage}
              source={require("../assets/contactus.jpg")}
/>*/}
            </TouchableOpacity>
        </View>
    );
};

const styles= StyleSheet.create({
    
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    textStyle: {
        textTransform: "uppercase",
        
    },
    iconImage: {
          width: 100,
          height: 50,
          aspectRatio: 1,
    }
});

export default Menu;