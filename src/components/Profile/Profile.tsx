import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';
import {ActionsTypes, PostsType} from '../../redux/store';


type ProfileType = {
    Posts: Array<PostsType>
    message: string
    dispatch: (action: ActionsTypes) => void
}

const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                Posts={props.Posts}
                message={props.message}
                dispatch={props.dispatch}
            />
        </div>
    )
}


export default Profile;