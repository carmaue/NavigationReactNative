import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props extends StackScreenProps<any, any> { };

export const PersonaScreen = ({ navigation }: Props) => {
    return (
        <View>
            <Text>Persona </Text>


            <TouchableOpacity onPress={() => navigation.pop()}>
                <Text>
                    Atras
                </Text>
            </TouchableOpacity>
        </View>
    )
}
