import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity as Touch,
    InteractionManager,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Header,Icon,Card,Button,List, ListItem  } from 'react-native-elements'


export default Result = (props) => (
    <View style={styles.contaner}>
    <View style={styles.toolbar}>
    <Header
          leftComponent={<Icon
              name='home'
              color='#fff'
              type='font-awesome'
              onPress={
                  event => {
                      props.navigator.replace({
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

        <Card
          title={'From: ' + getJSON(props.data.data).badge.identityClaim.identityName}
          image={require('./img/birmingham.png')}>

          <Text style={{marginBottom: 10}}>
              Congratulations, Verified!
          </Text>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='University Homepage' />
        </Card>

        <List>
        <ListItem
                key={0}
                title={'Student: ' +getJSON(props.data.data).recipient.identity}
                leftIcon={{ name: 'user-circle-o',type:'font-awesome'}}
        />
        <ListItem
                key={1}
                title={'School: ' +getJSON(props.data.data).badge.name}
                leftIcon={{ name: 'university',type:'font-awesome'}}
        />
        <ListItem
                key={2}
                title={'Issued On: ' + getJSON(props.data.data).issuedOn}
                leftIcon={{name: 'calendar-check-o',type:'font-awesome'}}
        />
        <ListItem
                key={3}
                title={ 'Expiration Date: ' + getJSON(props.data.data).badge.expires}
                leftIcon={{name: 'calendar-times-o',type:'font-awesome'}}
        />

        </List>

    </View>
);

getJSON = (data) => {
    return  JSON.parse(data);
};

const styles = StyleSheet.create({
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
    text: {
        padding: 50,
        color: 'rgba(30, 145, 255, 1)',
        fontSize: 20,
    },
})
