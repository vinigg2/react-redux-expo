import React from 'react';
import {
    createAppContainer,
    createStackNavigator
} from 'react-navigation';

import {
    YellowBox,
    Platform,
    Easing,
    Animated
} from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import Splash from '../pages/splash';

let SlideFromRight = (index, position, width) => {
    const inputRange = [index - 1, index, index + 1];
    const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [width, 0, 0]
    })
    const slideFromRight = { transform: [{ translateX }] }
    return slideFromRight
};

let CollapseExpand = (index, position) => {
    const inputRange = [index - 1, index, index + 1];
    const opacity = position.interpolate({
        inputRange,
        outputRange: [0, 1, 1],
    });

    const scaleY = position.interpolate({
        inputRange,
        outputRange: ([0, 1, 1]),
    });

    return {
        opacity,
        transform: [
            { scaleY }
        ]
    };
};


const TransitionConfiguration = () => {
    return {
        transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: (sceneProps) => {
            const { layout, position, scene } = sceneProps;
            const width = layout.initWidth;
            const { index, route } = scene
            const params = route.params || {};
            const transition = params.transition || 'default';
            return {
                collapseExpand: CollapseExpand(index, position),
                default: SlideFromRight(index, position, width),
            }[transition];
        },
    }
}

const RootStack = createStackNavigator({
    Splash: {
        screen: Splash
    }
},
    {
        initialRouteName: 'Splash',
        mode: Platform.OS === "ios" ? "modal" : "card",
        headerMode: 'none',
        transitionConfig: TransitionConfiguration
    });

const Router = createAppContainer(RootStack);

export default Router;







