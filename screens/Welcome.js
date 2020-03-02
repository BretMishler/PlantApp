import React from 'react';
import { StyleSheet } from 'react-native';

import { theme } from '../constants';
import { Button, Block, Text } from '../components';

export default class Welcome extends React.Component {

    static navigationOptions = {
        headerShown: false
    }

    /**
     * Contain the images which will be horizontally scrollable.
     */
    renderIllustrations() {
        return (
            <Block>
                <Text>Image</Text>
            </Block>
        )
    }

    /**
     * Contain the Delimiter Dots as per the number of illustrations.
     * The idea is to animate to active dot whenever we scroll the illustrations.
     */
    renderSteps() {
        return(
            <Block>
                <Text>* * *</Text>
            </Block>
        )
    }
    
    render(){
        return (
            <Block>
                <Block center bottom flex={0.4}>
                    <Text h1 center bold>
                        Your Home.
                    <Text h1 primary> Greener.</Text>
                    </Text>
                    <Text h3 gray2 style={{ marginTop: theme.sizes.padding / 2 }}>
                        Enjoy the experience.
                    </Text>
                </Block>
                <Block center middle>
                    {this.renderIllustrations()}
                    {this.renderSteps()}
                </Block>
                <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
                    <Button gradient onPress={() => this.props.navigation.navigate('Login')}>
                        <Text center semibold white>Login</Text>
                    </Button>
                    <Button shadow onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text center semibold>Signup</Text>
                    </Button>
                    <Button onPress={() => {}}>
                        <Text center caption gray>Terms of service</Text>
                    </Button>
                </Block>
            </Block>
    );
    }
}