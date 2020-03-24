import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>You are currently in Settings Screen</Text>
            </View>
        )
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