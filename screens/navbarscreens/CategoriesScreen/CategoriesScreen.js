import React, { Component } from "react";
import {
    FlatList,
    Text,
    View,
    Image,
    TouchableHighlight
} from "react-native";

import { categories } from '../../../src/data/dataArray';
import styles from './style';

class CategoriesScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Categories',
    });

    constructor(props) {
        super(props);
    }

    onPressCategory = item => {
        const title = item.name;
        const category = item;
        this.props.navigation.navigate('RecipesList', { category, title });

    };

    renderCategory = ({ item }) => (
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressCategory(item)}>
            <View style={styles.categoriesItemContainer}>
                <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
                <Text style={styles.categoriesName}>{item.name}</Text>
                <Text style={styles.categoriesInfo}>{getNumberOfRecipes(item.id)} recipes</Text>
            </View>
        </TouchableHighlight>
    );

    //

    render() {
        return (
            <View>
                <FlatList
                    data={categories}
                    renderItem={this.renderCategory}
                    keyExtractor={item => `${item.id}`}
                />
            </View>
        );
    }
}

export default CategoriesScreen;
