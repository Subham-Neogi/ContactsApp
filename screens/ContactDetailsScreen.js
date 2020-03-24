import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'

export default class ContactDetailsScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({ 
        headerTitle: navigation.getParam('name')
    })

    render() {
        return (
            <View>
                <Text style={{paddingLeft:10,fontSize:18}}>{"Phone Number: "+this.props.navigation.getParam('phone')}</Text>
                <Button type="outline" title="Go to Random Contact" onPress={this._goToRandom}/>
            </View>
        )
    }

    _goToRandom = () => {
        const contacts = this.props.screenProps.contacts
        const phone = this.props.navigation.getParam('phone')
        let randomContact
        while(!randomContact){
            const randomIndex = Math.floor(Math.random() * contacts.length)
            if (contacts[randomIndex].phone !== phone){
                randomContact = contacts[randomIndex]
            }
        }
        this.props.navigation.push('ContactDetails',{
            name: randomContact.name,
            phone:randomContact.phone
        })
    }

}