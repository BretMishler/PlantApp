import React from 'react';
import { StyleSheet, FlatList, Image, Dimensions, Animated } from 'react-native';

import { theme } from '../constants';
import { Button, Block, Text } from '../components';
import { styles } from '../components/Block';

export default class Welcome extends React.Component {
    /**
     * Store our animation value for horizontal animation.
     */
    scrollX = new Animated.Value(0);

    static navigationOptions = {
        headerShown: false
    }

    /**
     * Contain the images which will be horizontally scrollable.
     */
    renderIllustrations() {
        const { illustrations } = this.props;
        const { width, height } = Dimensions.get('window');
// pagingEnabled: When its value is true, 
//      the scroll view stops on multiples of the scroll view’s size when scrolling. The default value is false.
// scrollEnabled: When its value is false,
//      the view cannot be scrolled via touch interaction. The default value is true.
// showsHorizontalScrollIndicator: When its value is false
//      the horizontal scroll bar at the bottom does not show up.
// scrollEventThrottle: This prop is used to controls how often the scroll event will be fired while scrolling (as a time interval in ms).
//      A lower number corresponds to better accuracy for code that is tracking the scroll position.
// snapToAlignment: This prop will define the relationship of the snapping to the scroll view.
// keyExtractor: identify each item in the list uniquely
// renderItem: enables user to return the template of each item in the list
//      In this case, its the Image component that has source illustrations array
        return (
            <FlatList
                horizontal
                pagingEnabled
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                snapToAlignment="center"
                data={illustrations}
                extraDate={this.state}
                keyExtractor={(item, index) => `${item.id}`}
                renderItem={({ item }) => (
                    <Image
                    source={item.source}
                    resizeMode="contain"
                    style={{ width, height: height / 2, overflow: 'visible' }}
                    />
                )}
                // Event of the Animated component takes the nativeEvent as a parameter.
                // Then, define the contentOffset value according to the scrollX variable inside the nativeEvent config. 
                onScroll={
                    Animated.event([{
                        nativeEvent: { contentOffset: { x: this.scrollX }}
                    }])
                }
            />
        )
    }

    /**
     * Contain the Delimiter Dots as per the number of illustrations.
     * The idea is to animate to active dot whenever we scroll the illustrations.
     */
    renderSteps() {
        const { illustrations } = this.props
        const { width, height } = Dimensions.get('window');
        const stepPosition =  Animated.divide(this.scrollX, width);
        
        return(
            <Block row center middle style={styles.stepsContainer}>
                {illustrations.map((item, index) => {
                    const opacity = stepPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.4, 1, 0.4],
                        extrapolate: 'clamp',
                    });

                    return (
                        <Block
                            animated
                            flex={false}
                            key={'step-${index}'}
                            color="gray"
                            style={[styles.steps, { opacity }]}
                        />
                    )
                })}
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

Welcome.defaultProps = {
    illustrations: [
    { id: 1, source: require('../assets/images/illustration_1.png') },
    { id: 2, source: require('../assets/images/illustration_2.png') },
    { id: 3, source: require('../assets/images/illustration_3.png') },
    ],
};