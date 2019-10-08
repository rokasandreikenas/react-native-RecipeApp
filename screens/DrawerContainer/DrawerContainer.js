import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../src/components/MenuButton/MenuButton';

export default class DrawerContainer extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.content}>
                <View style={styles.container}>
                    <MenuButton
                        title="HOME"
                        source={require('../../assets/icons/home1.png')}
                        onPress={() => {
                            navigation.navigate('Home');
                            navigation.closeDrawer();
                        }}
                    />
                    <MenuButton
                        title="CATEGORIES"
                        source={require('../../assets/icons/category1.png')}
                        onPress={() => {
                            navigation.navigate('Categories');
                            navigation.closeDrawer();
                        }}
                    />
                    <MenuButton
                        title="SEARCH"
                        source={require('../../assets/icons/search1.png')}
                        onPress={() => {
                            navigation.navigate('Search');
                            navigation.closeDrawer();
                        }}
                    />
                    <MenuButton
                        title="FAVOURITES"
                        source={require('../../assets/icons/favourites.png')}
                        onPress={() => {
                            navigation.navigate('Favourites');
                            navigation.closeDrawer();
                        }}
                    />
                </View>
            </View>
        );
    }
}

DrawerContainer.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired
    })
};

