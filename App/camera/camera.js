import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity as Touch,
    View,
    Easing,
    Animated,
    ToastAndroid,
} from 'react-native';

import Camera from 'react-native-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Icon, Header } from 'react-native-elements';

export default class BadInstagramCloneApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            line_position: new Animated.Value(0),
        }
    }

    lineAnimated = () => {
        this.state.line_position.setValue(0);

        Animated.timing(this.state.line_position, {
            toValue: 200,
            duration: 3500,
            easing: Easing.linear,
        }).start(() => {
            this.lineAnimated();
        });
    };

    componentDidMount() {
        setTimeout(() => {
            this.lineAnimated();
        }, 2000);
    }



    render() {
        return (
            <View style={styles.container}>

                <View style={styles.toolbar}>
                <Header
                      leftComponent={<Icon
                          name='home'
                          color='#fff'
                          type='font-awesome'
                          onPress={
                              event => {
                                  this.props.navigator.replace({
                                      id: 0,
                                      data: {},
                                  });
                              }
                        }
                        />
                  }
                  centerComponent={{ text: 'BTCert', style: { color: '#fff', fontSize: 18 } }}

                />
                </View>
                <Camera
                    ref={(cam) => { this.camera = cam } }
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}
                    captureQuality={'medium'}
                    onBarCodeRead={(data) => {
                        this.props.navigator.replace({
                            id: 2,
                            data: data,
                        });
                    } }
                    >
                    <View style={styles.modal}>
                        <View style={styles.shade}></View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.shade}></View>
                            <View style={styles.qrcode}>

                                <Animated.View style={[styles.line, { translateY: this.state.line_position }]}>

                                </Animated.View>

                            </View>
                            <View style={styles.shade}></View>
                        </View>

                        <View style={[styles.shade, styles.content]}>
                            <Text style={styles.text}>Please Scan the QRCode</Text>
                        </View>
                    </View>
                </Camera>
            </View>
        );
    }

    takePicture = () => {
        // 异步的
        this.camera.capture()
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    toolbar: {
        height: 65,
        backgroundColor: '#2196f3',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    toolbarTitle: {
        color: '#fff',
        fontSize: 20,
        margin: 18,
    },
    preview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        flex: 1,
        width: Dimensions.get('window').width,
    },
    shade: {
        flex: 1,
        backgroundColor: 'rgba(1, 1, 1, 0.65)',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    qrcode: {
        width: 300 ,
        height: 300,
        alignItems: 'center',
    },
    text: {
        color: '#ccc',
        fontSize: 15,
    },
    line: {
        width: 200,
        height: 1,
        backgroundColor: 'rgba(30, 255, 145, 1)',
    }
});
