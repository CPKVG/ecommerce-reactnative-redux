import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { navigationRef } from '../../RootNavigation'
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';
import { fetchCategory, fetchProductSearch } from '../../redux/Product/product.action';


interface Props {
    title: string;
  }

type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const Header = (props: Props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<homeScreenProp>();

  const onPress = (navigation: homeScreenProp) =>{
    navigation.navigate("Home") 

    //dispatch to reset search and category state
    dispatch(fetchProductSearch(undefined))
    dispatch(fetchCategory("")) 
  }


    return (
      <View style={styles.header}>
        <Text 
        style={styles.headerText}
        // onPress = {() => navigation.goBack()}
        onPress = {() => onPress(navigation)}

        >{props.title}</Text>
      </View>
    );
  };


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
