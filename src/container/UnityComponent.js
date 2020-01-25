import React from "react";
import { connect } from "react-redux";
import { AsyncStorage, View, Text } from 'react-native';
//import { getDashboardData, getDashboardQandA, getDashboardClinicalNotes, getDashboardTagFeed, getDashboardTimeLineData, getDashboardSelectedTag, callApiToFollowUnfollowPost } from "../actions/dashboard";
//import { getMyProfileData } from '../actions/myProfile';
import Dashboard from "../components/Dashboard/Dashboard";
//import postMenuConstants from '../constants/PostMenu';
//import dashboardConstants from '../constants/Dashboard';
//import qAndAJson from '../components/Dashboard/QnA.json';
import * as wordConstants from '../constants/WordConstants';
import styles from '../stylesheet/Unity.style';
import UnityView from "react-native-unity-view";

class UnityComponent extends React.PureComponent {
    state = {
        selectedCategoryOption: ''
    };

    onMessage(event) {
        console.log('OnUnityMessage: ' + event.nativeEvent.message);    // OnUnityMessage: click
    }

    onUnityMessage(handler) {
        console.log(handler.name); // the message name
        console.log(handler.data); // the message data
        setTimeout(() => {
          // You can also create a callback to Unity.
          handler.send('I am callback!');
        }, 2000);
    }
    

    render() {

        return (
            <View style={{flex:1}}>
                <UnityView
                    ref={(ref) => this.unity = ref}
                    onMessage={this.onMessage.bind(this)}
                    onUnityMessage={this.onMessage.bind(this)}
                    style={{flex:1 }}
                />
            </View>

        );
    }
}

// eslint-disable-next-line
const mapStateToProps = state => {

    return {

    };
};

// eslint-disable-next-line
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UnityComponent);
