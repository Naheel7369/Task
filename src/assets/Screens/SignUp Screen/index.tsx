import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import fonts from '../../Fonts';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import BootSplash from "react-native-bootsplash"

interface Errors {
  EnterName?: string;
  EnterL?: string;
  EnterEmail?: string;
  Enterpassword?: string;
}

interface INavigation {
  navigation: any;
}

const SignUP: React.FC<INavigation> = ({navigation}) => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);


  const [EnterName, setEnterName] = useState<string>('Naheel');
  const [EnterL, setEnterL] = useState<string>('Suleman');
  const [show, setShow] = useState(false);
  const [EnterEmail, setEnterEmail] = useState<string>(
    'naheelsuleman@gmail.com',
  );
  const [Enterpassword, setEnterpassword] = useState<string>('HAHAHAHA');
  const [errors, setErrors] = useState<Errors>({});

  const Validation = (): boolean => {
    const errors: Errors = {};
    if (!EnterName) {
      errors.EnterName = 'Enter a valid Name';
    }
    if (!EnterL) {
      errors.EnterL = 'Enter a valid Last Name';
    }
    if (!EnterEmail) {
      errors.EnterEmail = 'Enter a valid Email';
    }
    if (!Enterpassword) {
      errors.Enterpassword = 'Enter a valid Password';
    }
    setErrors(errors);

    return Object.keys(errors).length === 0;
  };
  function Ontoggle() {
    setShow(!show);
  }

  const handleSubmit = () => {
    if (Validation()) {
      console.log('submitted', EnterName, EnterEmail, Enterpassword, EnterL);
      setEnterName('');
      setEnterEmail('');
      setEnterpassword('');
      setEnterL('');
      navigation.navigate('Home', {EnterName, EnterEmail});
    }
  };
  return (
    <View style={{}}>
      <ScrollView>
        <ImageBackground
          source={require('../../images/image.jpg')}
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
          resizeMode="cover">
          <View style={styles.inputContainer}>
            <Image
              style={styles.image}
              source={require('../../images/image.jpg')}
            />
            <View>
              <View>
                <Text style={styles.Textinput}>Enter Your Name:</Text>
                <TextInput
                  style={styles.Feilds}
                  placeholder="Name:"
                  value={EnterName}
                  onChangeText={setEnterName}
                />
                {errors.EnterName && (
                  <Text style={styles.error}>{errors.EnterName}</Text>
                )}
              </View>
              <View>
                <Text style={styles.Textinput}>Enter Your Last Name:</Text>
                <TextInput
                  style={styles.Feilds}
                  placeholder="Enter your Last Name:"
                  value={EnterL}
                  onChangeText={setEnterL}
                />
                {errors.EnterL && (
                  <Text style={styles.error}>{errors.EnterL}</Text>
                )}
              </View>
              <View>
                <Text style={styles.Textinput}>Enter Your Email:</Text>
                <TextInput
                  style={styles.Feilds}
                  placeholder="Enter your Email:"
                  value={EnterEmail}
                  onChangeText={setEnterEmail}
                />
                {errors.EnterEmail && (
                  <Text style={styles.error}>{errors.EnterEmail}</Text>
                )}
              </View>
              <View>
                <Text style={styles.Textinput}>Enter Your Password:</Text>
                <View style={styles.Feilds}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Enter your Password:"
                    value={Enterpassword}
                    onChangeText={setEnterpassword}
                    secureTextEntry={!show}
                  />

                  <TouchableOpacity onPress={Ontoggle}>
                    <Image
                      style={styles.eye}
                      source={
                        show
                          ? require('../../images/eyes.png')
                          : require('../../images/eye.png')
                      }
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.Buttonstyle}>
                  <Button
                    color="#000000f1"
                    title="Sign Up"
                    onPress={handleSubmit}
                  />
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default SignUP;

const styles = StyleSheet.create({
  inputContainer: {
    // backgroundColor: '#bcbcbe',
  },
  Feild: {
    margin: 6,
    borderWidth: 3,
    borderRadius: 4,
    borderColor: 'black',
    padding: 6,
    marginLeft: '2.5%',
    color: 'black',
    fontFamily: fonts.GupterBold,
    fontSize: 18,
  },
  Feilds: {
    margin: 6,
    borderWidth: 3,
    borderRadius: 4,
    borderColor: 'black',
    padding: 6,
    marginLeft: '2.5%',
    color: 'black',
    fontFamily: fonts.GupterBold,
    fontSize: 18,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  Textinput: {
    margin: 8,
    fontWeight: '500',
    fontFamily: fonts.GupterBold,
    fontSize: 18,
    marginLeft: '2.5%',
    color: 'black',
  },
  Buttonstyle: {
    margin: 20,
    marginBottom: 200,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: 'center',
    // marginBottom: 50,
    marginVertical: 20,
  },
  error: {
    color: 'red',
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.3,
  },
  eye: {
    height: 25,
    width: 25,
    marginTop: 15,
  },
  textInput: {
    fontSize: 18,
  },
});
