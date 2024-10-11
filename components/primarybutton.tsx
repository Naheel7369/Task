import React from 'react';
import { View, Text, Pressable, StyleSheet, GestureResponderEvent } from 'react-native';
import fonts from '../src/assets/Fonts';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onPress: (event: GestureResponderEvent) => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onPress}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <View></View>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: '#050505' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 14,
    // margin: 4,
    overflow: 'hidden',
    alignSelf:'center',
    

  },
  buttonInnerContainer: {
    backgroundColor: '#000000', 
    paddingVertical: 17,
    paddingHorizontal: 18,
    elevation: 2,
    
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontFamily:fonts.GupterBold,
    fontWeight:'500',
    fontSize:20,
  },
  pressed: {
    opacity: 0.75,
  },
});


