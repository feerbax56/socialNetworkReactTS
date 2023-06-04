import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profileReducer';

type ProfilePropsType ={ profile: ProfileType | null }

const Profile = (props:ProfilePropsType ) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}


export default Profile;