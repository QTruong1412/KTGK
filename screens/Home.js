import { StyleSheet, TextInput, View, Text, Pressable, FlatList } from "react-native"

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={{ textAlign: 'center', fontSize: 50, alignItems: "center", fontWeight: 'bold' }}>Home</Text>
            </View>
            <View style={styles.containerss}>
                <View style={styles.activity}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Add new Activity"
                        placeholderTextColor="#003f5c"
                        onClearText={() => console.log(onClearText())}
                    />
                    <Pressable style={styles.addbutton}>
                        <Text >ADD</Text>
                    </Pressable>
                </View>
                <View style={styles.flatlist}>
                    <FlatList >

                    </FlatList>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fcfcfc",
    },
    containerss: {
        flex: 9,
        backgroundColor: '#9d9696'
    },
    TextInput: {
        height: 30,
        padding: 10,
        backgroundColor: "#f0e1e4",
        width: "70%",
        marginBottom: 20,
        borderRadius: 5
    },
    addbutton: {
        padding: 10,
        height: 30,
        width: "10%",
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#142dff",
        borderRadius: 5
    },
    activity: {
        flex: 1,
        flexDirection: 'row',
        width: '90%',
        alignItems: "center",
        justifyContent: "center",
    },
    flatlist: {
        flex: 8,
        alignItems: "center",
        justifyContent: "center",
    }
})
export default Home;