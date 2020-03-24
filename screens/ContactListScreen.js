import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

import SectionListContacts from '../ContactsList'

export default class ContactListScreen extends React.Component{
    static navigationOptions = ({navigation}) => ({
        headerTitle: 'Contacts',
        headerRight: <Button 
        type="outline"
        title="Add Contact" 
        onPress={()=>navigation.navigate('AddContact')}
        />
        })

    state = {
        showContacts: true,
    }

    toggleContacts = () => {
        this.setState(prevState => ({ showContacts: !prevState.showContacts}))
    }

    showForm = () => {
        this.props.navigation.navigate('AddContact')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.button}>
                    <Button type="outline" title="Toggle Contacts" onPress={this.toggleContacts}/>
                </View>
                {this.state.showContacts && 
                <SectionListContacts 
                contacts={this.props.screenProps.contacts}
                onSelectContact={(contact) => {this.props.navigation.navigate('ContactDetails',{
                    phone: contact.phone,
                    name: contact.name,
                })}}
                />}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        fontSize:32,
        paddingBottom: 82,
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