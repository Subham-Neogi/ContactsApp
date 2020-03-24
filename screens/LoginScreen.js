import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { Button } from 'react-native-elements'

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>You are currently in Login Screen</Text>
                <Button type="clear" title="Press to Log In" onPress={this._login}/>
            </View>
        )
    }

    _login = () => {
        //login logic
        this.props.navigation.navigate('Main')
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1
    },
    text: {
        textAlign : 'center',
        fontSize: 14
    }
})