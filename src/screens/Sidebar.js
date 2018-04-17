import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

class Sidebar extends Component {
    render() {
        return (
            <View style={{backgroundColor: 'green'}}>
                <Text>Noi dung</Text>
            </View>
        );
    }
}

Sidebar.propTypes = {};

export default Sidebar;
