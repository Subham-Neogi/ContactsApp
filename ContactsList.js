import React from 'react'
import {SectionList, Text,StyleSheet} from 'react-native'
import PropTypes from 'prop-types' 

import Row from './Row'

const styles = StyleSheet.create({
    section:
    {   
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: 'bold', 
        backgroundColor: '#98a6b5',
    },
})
const renderSectionHeader = (obj) => (<Text style={styles.section}>{obj.section.title}</Text>)

const ContactsList = props => {
    const renderItem = (obj) => (<Row {...obj.item} onSelectContact={(contact)=>{props.onSelectContact(contact)}}/>)

    const contactsByLetter = props.contacts.reduce((obj,contact) => {
        const firstLetter = contact.name[0].toUpperCase()
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact],
        }
    },{})

    const sections = Object.keys(contactsByLetter).sort().map(letter => ({
        title: letter,
        data: contactsByLetter[letter],
    }))
    return(
    <SectionList
        stickySectionHeadersEnabled={true}
        renderItem={renderItem}
        renderSectionHeader = {renderSectionHeader}
        sections={sections}
    />
)}

ContactsList.propTypes = {
    contacts: PropTypes.array,
}
export default ContactsList