import {StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Menu from "./component/Menu";

const Page = (props) => {
    const description="Graphic Era Educational Society, established in 1993, that aims to mobilize world class education and generate resources for providing and supporting quality education for all."
    return (
      <View style={styles.mainContainer}>
        <View style={styles.homeTop}>
          <Image style={styles.headerImage}
            resizeMode='center'
              source={require("../../assets/img.jpg")}
              />
            <Text style={styles.mainHeader}>Welcome</Text>
            <Text
            style={[
              styles.mainHeader,
              {
                fontSize:30,
                color:"#4c5dab",
                marginTop:0,
              },
            ]}>
              {props.channelName}
            </Text>
  
            <Text style={styles.parastyle}> {description}</Text>
        </View>

        <View style={styles.menustyle}>
         <View style={styles.linestyle}></View>
          <Menu />
          <View style={[styles.linestyle,
          {
            marginVertical: 15,
          }
        ]}></View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    mainContainer: {
      height: "100%",
      display: "flex",
      justifyContent: "space-between",
      paddingHorizontal: 10,
      backgroundColor:"#ffffff",
      textAlign: 'center',
    },
  
    homeTop: {
      display: "flex",
      justifycontent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
  
    headerImage: {
      height: 222,
      width: 200,
      aspectRatio: 1.60,
      marginTop: 20,
      borderRadius: 10,
    },
  
    mainHeader: {
      fontSize: 26,
      color: "#344055",
      textTransform: "uppercase",
      textAlign:"center",
      marginTop: 20,
  
    },
  
    parastyle: {
      textAlign: "center",
      fontSize: 22,
      color: "#7d7d7d",
      marginTop: 20,
      paddingBottom: 25,
  
    },

    linestyle: {
      marginBottom: 40,
      borderWidth: 1.0, 
      borderColor: "#0000ff",
    },
  });

export default  Page;