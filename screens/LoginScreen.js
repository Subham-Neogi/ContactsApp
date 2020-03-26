import React from 'react'
import { KeyboardAvoidingView, View, TextInput, StyleSheet, Text} from 'react-native'
import { Button, colors } from 'react-native-elements'
import Constants from 'expo-constants'

export default class LoginScreen extends React.Component {
    state = {
        username: '',
        password: '',
        err: ''
    }

    handleUsernameUpdate = (username) => {
        this.setState({username})
    }

    handlePasswordUpdate = (password) => {
        this.setState({password})
    }

    _login = async () => {
        try{
            const response = await fetch(`http://192.168.43.241:8000`,
            {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify({
                    username: this.state.username,
                    password:this.state.password
                })
            })
            //console.log(response)
            if (response.ok) {
                this.props.navigation.navigate('Main')
                return
            }

            const errMessage = await response.text()
            this.setState({err: errMessage})
    }catch(error){
        console.error(error)
    }
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View>
                    <Text style={{color: 'red', textAlign: 'center'}}>{this.state.err}</Text>
                </View>
                <View style={styles.input}>
                    <TextInput placeholder="Username" value={this.state.username}
                    onChangeText={this.handleUsernameUpdate} autoCapitalize="none"/>
                </View>
                <View style={styles.input}>
                    <TextInput placeholder="Password" value={this.state.password}
                    onChangeText={this.handlePasswordUpdate} secureTextEntry={true}/>
                </View>
                <View style={styles.button}>
                    <Button type="outline" title="Log In" onPress={this._login}/>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Constants.statusBarHeight,
        flex: 1, 
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    input:{
        minWidth: 100,
        borderColor: 'lightblue',
        borderWidth: 1,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
    }, 
    button: 
    {
        justifyContent: 'space-around',
        width: "100%",
        padding: 20,
        alignItems: 'center',
        
    }
})