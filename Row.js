import React from 'react'
import {TouchableOpacity,Text,StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    row:
    {
        flex: 1,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 35,
        borderColor: 'grey',
        borderWidth: 1,
        borderBottomColor: 'white',
    }
})
const Row = props => (
    <TouchableOpacity style={styles.row} onPress={()=>{props.onSelectContact({name:props.name,phone:props.phone})}}>
        <Text>{props.name}</Text>
        <Text>{props.phone}</Text>
    </TouchableOpacity>
)

export default Row