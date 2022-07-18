import { Linking, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";

const About = () => {
    return (
        <View style={styles.aboutContainer}>
            <Text style={styles.mainHeader}>Graphic Era Hill University</Text>
            <Text style={styles.parastyle}></Text>

            <View>
            <Image style={styles.headerImage}
            resizeMode='center'
              source={require("../../assets/logo.png")}
              />
            </View>

            <View style={styles.aboutLayout}>
                <Text style={styles.aboutSubHeader}></Text>
                <Text style={[styles.parastyle, styles.aboutPara]}>
                    Graphic Era was founded in 1993 by Dr. Kamal Ghanshala and started with undergraduate programs in core engineering and allied sciences. It is situated in Dehradun, Uttarakhand. In 2008 the institute was accorded the status of deemed university. In 2015 Graphic Era was accredited by the National Assessment and Accreditation Council (NAAC) with grade ‘A’
                </Text>
            </View>

            <Text style={styles.mainHeader}>Follow us on</Text>

            <View style={styles.menuContainer}>
                <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => 
                    Linking.openURL("https://www.youtube.com/c/GraphicEraOfficial")
            }>
                    <Image style={styles.iconImage}
              source={require("../../assets/youtube.jpg")}
              />
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => Linking.openURL("https://www.instagram.com/geuofficial/?hl=en")
            }>
                     <Image style={styles.iconImage}
              source={require("../../assets/insta.png")}
              />
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => Linking.openURL("https://www.facebook.com/gehu.official/")
            }>
                     <Image style={styles.iconImage}
              source={require("../../assets/fb.png")}
              />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    aboutContainer: {
        display: "flex",
        alignItems: "center",
    },
    mainHeader: {
        fontSize: 24,
        color: "#445055",
        textTransform: "uppercase",
        fontWeight: "500",
        marginTop: 20,
        marginBottom: 5,
        
    },
    headerImage: {
        height: 200,
        width: 200,
        aspectRatio: 1.00,
        marginTop: 10,
        borderRadius: 10,
      },
    parastyle: {
        fontSize: 18,
        color: "#7d7d7d",
        paddingBottom: 20,
    },
    menuContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-evenly", 
    },

    iconImage: {
        width: 80,
        height: 90,
        aspectRatio: 1.0,
    },

});

export default About;