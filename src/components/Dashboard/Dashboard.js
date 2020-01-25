import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image, ScrollView, Dimensions, FlatList, Platform, Modal, ActivityIndicator } from 'react-native';
import commonStyles from '../../stylesheet/common/commonStyles.style';
import { SafeAreaView } from 'react-navigation';
import styles from '../../stylesheet/Dashboard.style';


const { width } = Dimensions.get('screen').width;
const { height } = Dimensions.get('screen').height;



export default class Dashboard extends Component {
    constructor(props) {
        super(props);

    }



    renderItem = (item, index) => {
        return (
            <TouchableOpacity
                style={styles.containerStyle} 
                onPress={() =>this.props.navigation.navigate('UnityContainer')}>
        
                <Text style={styles.bodyContent}>{item.item.name}</Text>

            </TouchableOpacity>
        )
    }

    render() {

        const { dashboard, fetching, myProfileData, auth_token, postMenuOptionClick, selectedCategoryOption } = this.props;


        return (
            <SafeAreaView >
                <ScrollView>
                    <View style={{ flex: 1 ,justifyContent:'center',alignItems:'center'}}>
                        <FlatList
                            style={{ marginTop: '3%' }}
                            scrollEnabled={false}
                            pagingEnabled={true}
                            data={dashboard}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}




