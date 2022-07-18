import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const Contact = ({ navigation }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [agree, setAgree] = useState(false);

    const submit = () => {
        if(!name && !email && !phone && !message){
            Alert.alert("Please fill all the required feilds");
        } else{
            Alert.alert('Thank You ${name}');
            navigation.navigate("Page");
        }
    };
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Please fill the required details to reach through us</Text>

            <Text style={styles.description}>
                for more info contact us on priyansuuniyal@gmail.com
            </Text>

            <View style={styles.inputContainer}>

                <Text style={styles.labels}>Enter Your Name</Text>
                <TextInput
                 style={styles.inputStyle}
                 placeholder={"Abcd"}
                 value={name}
                 on ChangeText = {(userdata) => setName(userdata)}
                 />
            </View>

            <View style={styles.inputContainer}>

                <Text style={styles.labels}>Enter Your Email</Text>
                <TextInput
                 style={styles.inputStyle}
                 placeholder={"demo@gmail.com"}
                 value={email}
                 on ChangeText = {(email) => setEmail(email)}
                 />
            </View>

            <View style={styles.inputContainer}>

                <Text style={styles.labels}>Enter Your Mobile Number</Text>
                <TextInput
                 style={styles.inputStyle}
                 placeholder={"123456789"}
                 value={phone}
                 on ChangeText = {(phone) => setPhone(phone)}
                 />
            </View>

            <View style={styles.inputContainer}>

                <Text style={styles.labels}>How can we help you?</Text>
                <TextInput
                 style={[styles.inputStyle, styles.multilineStyle]}
                 placeholder={"Write Here"}
                 value={message}
                 on ChangeText = {(message) => setMessage(message)}
                 numberOfLines={6}
                 multiline={true}
                />
            </View>

            {/*checkbox */}

            <View style={styles.wrapper}>
                <Checkbox
                    value={agree}
                    onValueChange={() => setAgree(!agree)}
                    color={agree ? "#4630EB" : undefined}
                />
                <Text style={styles.wrapperText}>
                    I have read and agreed with the T&C
                    </Text>    
            </View>

            {/*submit button */}

            <TouchableOpacity
               style={[styles.buttonStyle,
            {
                backgroundColor : agree ? "#4630EB" : "grey",
            },

            ]}
            disabled={!agree}
            onPress={submit}
               >
                <Text style={styles.buttonText}>Contact Us</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 30,
        baclgroundColor: "fff",
    },
    mainHeader: {
        fontSize: 20,
        color: "#344055",
        fontWeight: "500",
        paddingTop: 20,
        paddingBottom: 15,
        textTransform: "capitalize",
    },
    description: {
        fontSize: 20,
        color: "#7d7d7d",
        paddingBottom: 20,
        lineHeight: 25,
    },
    inputContainer: {
        marginTop: 20,
    },
    labels: {
        fontWeight: "bold",

        color: "#7d7d7d",
        paddingBottom: 5,
        lineHeight: 25,
    },
    inputStyle: {
        borderWidth: 1,
        borderColor:"rgba(0,0,0,0.3)",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 2,
    },
    multilineStyle: {
        paddingVertical: 4,
    },
    buttonStyle: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 18,
        display: "flex",
        justifyContent: "center",
        marginVertical: 30,
    },
    buttonText: {
        color: "#eee",
    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
    },
    wrapperText: {
        marginLeft: 10,
        color: "#7d7d7d",
    },
});

export default Contact;