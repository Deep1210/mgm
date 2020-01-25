import React from "react";
import { connect } from "react-redux";
import { AsyncStorage,View,Text } from 'react-native';
//import { getDashboardData, getDashboardQandA, getDashboardClinicalNotes, getDashboardTagFeed, getDashboardTimeLineData, getDashboardSelectedTag, callApiToFollowUnfollowPost } from "../actions/dashboard";
//import { getMyProfileData } from '../actions/myProfile';
import Dashboard from "../components/Dashboard/Dashboard";
//import postMenuConstants from '../constants/PostMenu';
//import dashboardConstants from '../constants/Dashboard';
//import qAndAJson from '../components/Dashboard/QnA.json';
import * as wordConstants from '../constants/WordConstants';

class Other extends React.PureComponent {
    state = {
        selectedCategoryOption: ''
    };


    componentDidMount() {

    
    }
   
    render() {
        const { data, errors, fetching, onSuccess, auth_token } = this.state;

        return (
            <View>
                <Text>Other component</Text>
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
)(Other);
