import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import Profile from './Profile';
import axios from 'axios';
import {setUserProfile} from '../../redux/profileReducer';
import {UserType} from '../../redux/usersReducer';


type MapDispatchToPropsType = {
    setUserProfile: (profile: Array<UserType>) => void
}


export type UsersPropsType = UserType & MapDispatchToPropsType

class ProfileContainer extends React.Component<UsersPropsType, AppStateType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
};

type mapStateToProps = {
    profile: any
}

let mapStateToProps = (state: AppStateType): mapStateToProps => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);