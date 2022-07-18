import { FlatList, StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import Courses from "../api/Courses";

const Course = ({navigation}) => {

    const courseCard = ({item}) => {
        return( <View style={styles.mainContainer}>
            <View style={styles.courseContainer}>
             <View>
                <Image style={styles.cardImage}
                source={item.image}
                resizeMode="contain"
                />
             </View>
             <Text style={styles.mainHeader}>
                {item.title}
             </Text>
             <Text style={styles.description}>
                {item.description}
             </Text>

             <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonStyle}
                onPress={() => navigation.navigate("SemesterDetails",{
                  courseId: item.id,
                })
                }>
                  <Text style={styles.buttonText}>SemesterDetails</Text>
                </TouchableOpacity>
             </View>
            </View>
        </View>
        );
    };

    return (
        <FlatList 
        keyExtractor={(item) => item.id}
        data={Courses}
        renderItem={courseCard} />
    );
};

const styles = StyleSheet.create({
     cardImage: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
     },
     mainContainer: {
        paddingHorizontal: 20,
     },
     courseContainer: {
        padding: 30,
        textAlign: "center",
        borderRadius: 5,
        shadowColor: "grey",
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        marginVertical: 30,
     },
     mainHeader: {
        fontSize: 22,
        color: "#344055",
        textTransform: "uppercase",
        paddingBottom: 15,
        textAlign: "center",
     },
     description: {
        textAlign: "left",
        lineHeight: 20,
        fontSize: 16,
        color: "#7d7d7d",
     },
     buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
     },
     buttonStyle: {
        backgroundColor: "#809fff",
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 18,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
     },
     buttonText: {
        fontSize: 20,
        color: "#eee",
        textTransform: "capitalize",
     },
    });

   
export default Course;