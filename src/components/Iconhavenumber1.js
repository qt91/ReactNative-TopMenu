import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

class Iconhavenumber1 extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <View style={this.props.style}>

                <Image
                    style={{
                        marginTop: 3,
                        marginRight: 10
                    }}
                    source={this.props.img}/>
                <View style={{
                    backgroundColor: '#FFF',
                    borderRadius: 6,
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    padding: 2
                }}>
                    <Text style={{fontSize: 10}}>{this.props.text}</Text>
                </View>

            </View>
        );
    }
}

Iconhavenumber1.propTypes = {};

export default Iconhavenumber1;
