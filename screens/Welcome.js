import React from 'react';
import { StyleSheet } from 'react-native';

import { Button, Block, Text } from '../components';

export default class Welcome extends React.Component {

    static navigationOptions = {
        header: null
    }
    
    render() {
        return (
            <Block center middle>
                <Text>Welcome</Text>
            </Block>
        );
    }
}