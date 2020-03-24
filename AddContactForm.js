import React from 'react'
import { TextInput, View, StyleSheet} from 'react-native'
import { Button } from 'react-native-elements'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    container:{
        paddingTop: Constants.statusBarHeight,
        flex: 1, 
        backgroundColor: '#fff',
    },
    input:{
        minWidth: 100,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
    }, 
    button: 
    {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: "100%",
        padding: 20,
        alignItems: 'center',
        
    }
})

export default class AddContactForm extends React.Component {
    state = {
        name: '',
        phone: '',
        isFormValid: false,
    }

    componentDidUpdate(prevProps,prevState){
        if (this.state.name !== prevState.name || this.state.phone !== prevState.phone)
        this.validateForm()
    }

    getHandler = key => val => {
            this.setState({[key]: val})
        }

    //handleNameChange = this.getHandler('name')


    handlePhoneChange = phone => {
        if (+phone >= 0 && phone.length <=10)
        this.setState({phone})
    }

    validateForm = () => {
        if (+this.state.phone >= 0 && this.state.phone.length===10 && this.state.name.trim().length>=2)
            return this.setState({isFormValid:true})
        else
            return this.setState({isFormValid:false})
    }

    handleSubmit = () => 
    {
        this.props.onSubmit({
            name: (()=>{
                let formattedName = ""
                const substrings = this.state.name.split(' ')
                for (let i=0;i<substrings.length;i++)
                {
                    if (substrings[i].trim()!=="")
                    {
                        formattedName = formattedName+substrings[i]+" "
                    }
                }
                return formattedName
            })(),
            phone: this.state.phone,
        })
    }

    handleCancel = () => 
    {
        this.props.onCancel()
    }
    render() {
    return (
        <View style={styles.container} >
            <TextInput placeholder="Enter Name" style={styles.input} value={this.state.name} 
            onChangeText={this.getHandler('name')}/>
            <TextInput placeholder="Enter Phone Number" style={styles.input} value={this.state.phone}
            onChangeText={this.handlePhoneChange}
            keyboardType="numeric"
            />
            <View style={styles.button}>
                <Button type="outline" title="Cancel" onPress={this.handleCancel} />
                <Button type="outline" title="Submit" onPress={this.handleSubmit} disabled={!this.state.isFormValid}/>
            </View>
        </View>)
    }
}

