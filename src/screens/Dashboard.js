import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from './Header';
import Drawer from 'react-native-drawer';


class Dashboard extends Component {
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };

    render() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                content={<View style={{backgroundColor: 'red'}}>
                    <Text>RED</Text>
                </View>}
                openDrawerOffset={80}
                tweenHandler={Drawer.tweenPresets.parallax}
                tapToClose={true}
                tweenHandler={(ratio) => ({
                    main: {opacity: (2 - ratio) / 2}
                })}
                panCloseMask={0.2}
                closedDrawerOffset={-3}
                styles={drawerStyles}
            >
                <View style={{backgroundColor: 'yellow'}}>
                    <Header/>
                    <Text onPress={() => {
                        this.openControlPanel()
                    }}>Content</Text>
                </View>
            </Drawer>

        );
    }
}

Dashboard.propTypes = {};

export default Dashboard;
const drawerStyles = {
    drawer: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3},
}
