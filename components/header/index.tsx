import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'react-router-native'



interface Props {
    title: string;
  }


const Header = (props: Props) => {
    return (
      <View style={styles.header}>
        <Link to = "/"> 
        <Text style={styles.headerText}>{props.title}</Text>
        </Link>
      </View>
    );
  };

// const Header = () => {
//   return(
//     {}
//   )
// }


  const styles = StyleSheet.create({
    header: {
      height: 60,
      padding: 15,
      backgroundColor: '#407ece',
    },
    headerText: {
      color: 'white',
      fontSize: 24,
      fontWeight:'bold',
      textAlign: 'center',
    },
  });


export default Header
