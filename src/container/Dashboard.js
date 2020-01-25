import React from "react";
import { connect } from "react-redux";
import { AsyncStorage,View } from 'react-native';
//import { getDashboardData, getDashboardQandA, getDashboardClinicalNotes, getDashboardTagFeed, getDashboardTimeLineData, getDashboardSelectedTag, callApiToFollowUnfollowPost } from "../actions/dashboard";
//import { getMyProfileData } from '../actions/myProfile';
import Dashboard from "../components/Dashboard/Dashboard";
//import postMenuConstants from '../constants/PostMenu';
//import dashboardConstants from '../constants/Dashboard';
//import qAndAJson from '../components/Dashboard/QnA.json';
import * as wordConstants from '../constants/WordConstants';
import UnityView from "react-native-unity-view";

class DashboardContainer extends React.PureComponent {
    state = {
        data: {
            search: "",
        },
        fetching: false,
        errors: {},
        arrayData: [{name:'Game 1 new Game '},{name : 'Game 2 Old Game '},{name : 'Game 3 medium game'}],
        onSuccess: false,
        auth_token: '',
        myProfileData: '',
        selectedCategoryOption: ''
    };


    componentDidMount() {

       

    }

   

    

    callDashboardApi = () => {

        this.setState({ fetching: true })
       
        let postData = {
            "limit": 20,
            "paginate": 1,
        }

        postData.limit = 20;
        postData.paginate = 1;
        postData.category_id = 2;

        if (this.props.navigation.state.params && this.props.navigation.state.params.auth_token) {
            this.props.getDashboardData(postData, this.props.navigation.state.params.auth_token).then((response) => {

                this.setState({ fetching: false })
                let resData = response.data;

                //  if (!resData.success) {
                //   if (resData.message) {
                //     alert(resData.message);
                //   }
                //   return;
                //  }


                if (response) {
                    if (response.status === 200) {
                        this.setState({
                            arrayData: resData.all_posts.data
                        });
                    } else {
                       
                        if (resData.data.message) {
                            alert(resData.data.message);
                        } else {
                           
                            // alert(wordConstants.CONST_INTERNET_ISSUE_MESSAGE);
                        }
                    }

                } else {
                   
                    alert(wordConstants.CONST_INTERNET_ISSUE_MESSAGE)
                }


            });
        }
    }

   
    render() {
        const { data, errors, fetching, onSuccess, auth_token } = this.state;

        return (
            <View style={{flex:1}}>
            <UnityView
                ref={(ref) => this.unity = ref}
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
)(DashboardContainer);
