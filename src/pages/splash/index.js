import React, { Component } from 'react';
import { connect } from 'react-redux';
// import images from '~/helpers/images';
import {
    View,
    Text
} from './styles';

// import * as Animatable from 'react-native-animatable';

class Splash extends Component {
    componentDidMount() {

        // setTimeout(() => {
        //     this.props.navigation.replace('Terms');
        // }, 1500);
    }

    render() {
        return (
            <View>
                <Text>teste</Text>
            </View>
        );
    }
}

Splash.propTypes = {
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Splash);
