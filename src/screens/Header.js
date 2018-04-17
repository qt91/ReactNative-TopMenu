import React, {Component} from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import iconMenu from './../images/icon-menu.png';
import Iconhavenumber1 from './../components/Iconhavenumber1';

import iconCart from './../images/icon-cart.png';

const {height} = Dimensions.get('window');

class Header extends Component {
    // require("./../images/icon-cart.png")
    constructor(props) {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingLeft: 5
                }}>
                    <Image style={styles.iconMenu} source={iconMenu}/>
                </View>
                <View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingLeft: 5
                }}>
                    <Text style={{fontSize: 16, fontWeight: '700', color: '#FFF'}}>The title content</Text>
                </View>

                <View style={styles.groupIcon}>
                    <Iconhavenumber1 style={styles.icon} img={iconCart} text="77"/>
                    <Iconhavenumber1 style={styles.icon} img={iconCart} text="99"/>
                </View>


            </View>
        );
    }
}

Header.propTypes = {};

export default Header;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#67b0d6',
        height: height / 12,
        flexDirection: 'row',
    },
    groupIcon: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 'auto',

    },
    icon: {
        paddingLeft: 5
    },
    iconMenu: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    }
});
