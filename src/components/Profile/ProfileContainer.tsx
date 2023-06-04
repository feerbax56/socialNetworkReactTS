import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import Profile from './Profile';
import axios from 'axios';
import {ProfileType, setUserProfile} from '../../redux/profileReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';


type PathParamsType = {
    userId: string
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

 type MapStatePropsType = {
    profile: ProfileType | null
}

type ProfilePropsType = MapStatePropsType & MapDispatchPropsType/* & RouteComponentProps<PathParamsType>*/
type CommonPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<CommonPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        // if(!userId){
        //     userId = '26530'
        // }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}


export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);