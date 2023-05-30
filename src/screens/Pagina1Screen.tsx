import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme'
import { DrawerScreenProps } from '@react-navigation/drawer'

// interface Props extends StackScreenProps<any, any> { };
interface Props extends DrawerScreenProps<any, any> { };

export const Pagina1Screen = ({ navigation }: Props) => {

    navigation.setOptions({
        headerLeft: () => <Button title='Menu L' onPress={() => { navigation.toggleDrawer() }} />,
    })

    return (
        <View>
            <Text>Pagina 1</Text>
            <View style={styles.container}>


                <TouchableOpacity
                    style={styles.buttonBig}
                    onPress={() => navigation.navigate('Pagina2Screen',
                        {
                            id: 1,
                            nombre: 'Pedro'
                        })}>
                    <Text style={styles.buttonBigText}>
                        Pedro
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonBig}
                    onPress={() => navigation.navigate('Pagina2Screen',
                        {
                            id: 2,
                            nombre: 'Maria'
                        })}>
                    <Text style={styles.buttonBigText}>
                        Maria
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ ...styles.buttonBig, backgroundColor: 'black' }}
                    onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonBigText}>
                        Atras
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
