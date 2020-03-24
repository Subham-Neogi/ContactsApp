
import React, { Component } from 'react';

import contacts,{compareNames} from './contacts';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AddContactScreen from './screens/AddContactScreen';
import ContactListScreen from './screens/ContactListScreen';
import ContactDetailsScreen from './screens/ContactDetailsScreen';
import LoginScreen from './screens/LoginScreen';
import SettingsScreen from './screens/SettingsScreen'

// const MainNavigator = createSwitchNavigator({
//     AddContact: AddContactScreen,
//     ContactList: ContactListScreen
// },{
//     initialRouteName: 'ContactList'
// })

const ContactsTab = createStackNavigator({
    AddContact: AddContactScreen,
    ContactList: ContactListScreen,
    ContactDetails: ContactDetailsScreen 
},{
    initialRouteName: 'ContactList'
})


const MainNavigator = createBottomTabNavigator({
    Contacts: ContactsTab,
    Settings: SettingsScreen
})

const AppNavigator = createSwitchNavigator({
    Main: MainNavigator,
    Login: LoginScreen,
},{
    initialRouteName: 'Login'
})

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
    state = {
        contacts: contacts.sort(compareNames),
    }


    addContact = newContact => {
        this.setState(prevState =>({
            contacts: [...prevState.contacts, newContact].sort(compareNames),
            showForm: !prevState.showForm,
        }))
    }

    render() {
        return (
            <AppContainer
            screenProps={{
                contacts: this.state.contacts, 
                addContact:this.addContact,
            }}/>
        )
    }
}
