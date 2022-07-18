import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

const UserData = () => {
   const [isLoaded, setIsLoaded] = useState(true);
   const [myData, setMyData] = useState([]);

   
   const getUserData = async () => {
    try {
        const response = await fetch(
            "https://raw.githubusercontent.com/Pri9634/Pri9634/main/student.json"
        );
        const realData = await response.json();
        setMyData(realData);
        setIsLoaded(false);

    }catch(error) {
        console.log(error);
    }

   };

   useEffect(() => {
    getUserData(), []
   });
    
   const showUserData = ({ item }) => {
    return (
        <View style={styles.card}>
            <View style={styles.bioDataContainer}>
                <Text style={styles.bioData}>Bio-Data</Text>
                <Text style={styles.idNumber}>
                    {item.id < 10 ? '#0${item.id}' : '#{item.id}'}
                </Text>
            </View>

            <View style={styles.mainContain}>
                <Text style={styles.myName}>name: {item.name} </Text>
                <Text style={styles.myName}>email: {item.email} </Text>
                <Text style={styles.myName}>mobile: {item.mobile} </Text>
                <Text style={styles.myName}>CGPA: {item.CGPA} </Text>
                <Text style={styles.myName}>semester: {item.semester} </Text>
            </View>
        </View>
    );

   };

    return (
        <View>
            <Text style={styles.mainHeader}>List of Students</Text>
            <FlatList
            keyExtractor={(item) => item.id}
            data={myData}
            renderItem={showUserData}
            horizontal
            showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        minHeight: "100%",
        paddingVertical: 50,
        backgroundColor: "#ebedee",
    },
    card: {
        width: 250,
        height: 350,
        backgroundColor: "#fff",
        borderRadius: 5,
        margin:20,
    },
    bioDataContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#353535",
        paddingVertical: 10,
    },
    idNumber: {
        fontSize: 20,
        color: "rgba(255, 255, 255, 0.5)",
    },
    bioData: {
        fontSize: 30,
        color: "#fff",
    },
    mainHeader: {
        fontSize: 30,
        color: "#a18ce5",
        textAlign: "center",
    },
    mainContain: {
        padding: 10,
        backgroundColor: "#353535",
    },
    myName: {
        fontSize: 14,
        color: "#fff",
        marginBottom: 10,
        textTransform: "capitalize",
    },
});

export default UserData;