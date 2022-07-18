import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Courses from "../api/Courses";

const SemesterDetails = ({ navigation, route }) => {
    const id = route.params.courseId;
    console.log(id);

    const selectedCourse = Courses.find((element) => {
    return id === element.id;
});

return( 
   <View style={styles.mainContainer}>
    <View style={styles.courseContainer}>
     <View>
        <Image style={styles.cardImage}
        source={selectedCourse.image}
        resizeMode="contain"
        />
     </View>
     <Text style={styles.mainHeader}>
        {selectedCourse.title}
     </Text>
     <Text style={styles.description}>
        {selectedCourse.description}
     </Text>

     <Text style={styles.description}>
        {selectedCourse.course1}
     </Text>

     <Text style={styles.description}>
        {selectedCourse.course2}
     </Text>

     <Text style={styles.description}>
        {selectedCourse.course3}
     </Text>

     <Text style={styles.description}>
        {selectedCourse.course4}
     </Text>

     <Text style={styles.description}>
        {selectedCourse.course5}
     </Text>

     <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyle}
        onPress={() => navigation.navigate("SemesterDetails",{
          courseId: selectedCourse.id,
        })
        }>
          <Text style={styles.buttonText}>SemesterDetails</Text>
        </TouchableOpacity>
     </View>
    </View>
</View>
);
};

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 20,
    },
    courseContainer: {
        padding: 30,
        backgroundColor: "rgba(255, 255, 255, 0.90)",
        textAlign: "center",
        borderRadius: 5,
        shadowColor: "grey",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 8,
    },

    cardImage: {
        width: "100%",
        display: "flex",
        alignSelf: "center",
        height: undefined,
        aspectRatio: 1,
    },

    mainHeader: {
        fontSize: 22,
        color: "#344055",
        textTransform: "uppercase",
        paddingTop: 10,
        paddingBottom: 15,
        textAlign: "center",
    },

    description: {
        textAlign: "center",
        fontSize:16,
        color: "#7d7d7d",
        lineHeight: 20,
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    buttonStyle: {
        backgroundColor: "#809fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 20,
        color: "#eee",
    },
});

export default SemesterDetails;