import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';
import SignUP from '../SignUp Screen';
import fonts from '../../../../android/app/src/main/assets/custom';

const HomeScreen: React.FC<any> = ({ route,navigation }) => {
  const { EnterName,EnterEmail,Enterpassword } = route.params;
  function TaskHandler() {
    navigation.navigate('TaskScreen')
    
  }

  return (
    <ImageBackground source={require('../../images/image.jpg')}
    style={styles.rootScreen}
    imageStyle={styles.backgroundImage}
 resizeMode='cover'>

    <View style={styles.container}>
      
      <View style={styles.card}>
      <Image style={styles.image} source={require('../../images/images.png')} />
        <Text style={styles.textLabel}>Name:</Text>
        <Text style={styles.textValue}>{EnterName}</Text>
        <Text style={styles.textLabel}>Email:</Text>
        <Text style={styles.textValue}>{EnterEmail}</Text>
        <View>
            <Button color={'black'} title='Tasks'onPress={TaskHandler}/>
        </View>
        
        

      </View>
    </View>
    </ImageBackground>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#27272727',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    alignSelf: 'center',
    borderBottomWidth:2,
  },
  card: {
    width: '90%',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
    elevation: 5,
    shadowColor:'black',
    alignSelf:'center',
    
  },
  textLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'black',
    fontFamily:fonts. GupterBold,
    borderBottomWidth:2,
    
    
  },
  textValue: {
    fontSize: 20,
    marginBottom: 15,
    color:'black',
    
    fontFamily:fonts. GupterBold
  },
  rootScreen: {
    flex:1,
  },
  backgroundImage: {
    opacity: 0.3,
  },
});
