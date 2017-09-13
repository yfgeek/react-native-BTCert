import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity as Touch,
    View,
    Easing,
    Navigator,
    Image,
    Animated,
    ToastAndroid,
} from 'react-native';
import { Button } from 'react-native-elements';

export default class Intro extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Image source={require('./img/header.png')} style={styles.container}>
            <View style={styles.logo, styles.center}>
                <Image source={require('./img/logo.png')} style={{marginTop:60,width: 200, height: 54}} />
            </View>
            <View style={styles.container}>
                <View style={styles.content}>
                        <View style={styles.button}>
                            <Button
                              raised
                              icon={{name: 'fingerprint', size: 32}}
                              buttonStyle={{backgroundColor: '#2196f3', borderRadius: 10, width: 280, marginBottom: 40}}
                              textStyle={{textAlign: 'left'}}
                              title={`Authentic Now`}
                              onPress={event => {
                                 this.props.navigator.replace({
                                     id: 1,
                                     data: null,
                                 });
                             } }
                            />

                            <Button
                              raised
                              icon={{name: 'help', size: 32}}
                              buttonStyle={{backgroundColor: '#2196f3', borderRadius: 10, width: 280, marginBottom: 40}}
                              textStyle={{textAlign: 'left'}}
                              title={`Q & A`}
                              onPress={event => {
                                 this.props.navigator.replace({
                                     id: 1,
                                     data: null,
                                 });
                             } }
                            />

                            <Button
                              raised
                              icon={{name: 'heart', type: 'entypo', size: 32}}
                              buttonStyle={{backgroundColor: '#2196f3', borderRadius: 10, width: 280, marginBottom: 40}}
                              textStyle={{textAlign: 'left'}}
                              title={`About us`}
                              onPress={event => {
                                 this.props.navigator.replace({
                                     id: 1,
                                     data: null,
                                 });
                             } }
                            />

                        </View>
                </View>
            </View>

             </Image>

        );
    }
}

const styles = StyleSheet.create({
    container: {
          flex: 1,
          // remove width and height to override fixed static size
          width: null,
          height: null,
      },
      logo:{
          marginTop:60,
      },
    content: {
        flex: 1,
        alignItems: 'center',
    },
    center: {
        alignSelf : 'center',
    },
    text: {
        padding: 50,
        color: 'rgba(30, 145, 255, 1)',
        fontSize: 20,
    },
    button: {
        marginTop: 100,
    }
});
