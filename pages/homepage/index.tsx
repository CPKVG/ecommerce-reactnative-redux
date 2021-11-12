import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const HomePage = () =>{



    return(
        <View style ={styles.container}>
            <Text style ={styles.homePageText}>Hello from homePage</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    },
    homePageText:{
        color: 'black',
        fontSize: 16,
    }
})



export default HomePage